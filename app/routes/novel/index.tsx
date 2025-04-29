import { Link } from 'react-router';
import { getNovelFromId } from '~/db/queries/selects';
import { LoadingScreen } from '~/components/Loading';
import { Button } from '~/components/ui/button';
import type { Route } from './+types';

export function loader({ params }: Route.LoaderArgs) {
  const novelId = parseInt(params.novelId);

  if (isNaN(novelId)) {
    throw new Error('Invalid novel ID');
  }

  const novel = getNovelFromId(novelId);
  return novel;
}

export function HydrateFallback() {
  return <LoadingScreen />;
}

const NovelPage = ({ loaderData }: Route.ComponentProps) => {
  const {
    id,
    novel_name,
    novel_description,
    novel_author,
    novel_genre,
    novel_image_link,
    chapter_count,
  } = loaderData;

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-1">
          <div className="relative aspect-[2/3] w-full overflow-hidden rounded-lg shadow-lg">
            {novel_image_link ? (
              <img
                src={novel_image_link}
                alt={novel_name}
                className="h-full w-full object-cover object-center"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-muted text-muted-foreground">
                No Cover Available
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col space-y-6 md:col-span-2">
          <div>
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">{novel_name}</h1>
            <p className="mt-2 text-lg text-muted-foreground">by {novel_author}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              {novel_genre}
            </span>
            <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              {chapter_count} Chapters
            </span>
          </div>

          <div className="prose prose-gray max-w-none dark:prose-invert">
            <h3 className="text-xl font-semibold">Description</h3>
            <p>{novel_description}</p>
          </div>

          <div className="mt-auto flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button asChild className="flex-1">
              <Link to={`/${id}/1`}>Start Reading</Link>
            </Button>
            {chapter_count > 1 && (
              <Button asChild variant="outline" className="flex-1">
                <Link to={`/${id}/chapters`}>View All Chapters</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NovelPage;
