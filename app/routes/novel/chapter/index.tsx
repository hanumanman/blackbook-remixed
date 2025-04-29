import { Link, useNavigation } from 'react-router';
import { getChapter } from '~/db/queries/selects';
import { LoadingScreen } from '~/components/Loading';
import type { Route } from './+types';
import { Button } from '~/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // Import Lucide icons

export function loader({ params }: Route.LoaderArgs) {
  const novelId = parseInt(params.novelId);
  const chapterNumber = parseInt(params.chapterNumber);

  if (isNaN(novelId) || isNaN(chapterNumber)) {
    throw new Error('Invalid novel ID or chapter number');
  }

  const chapter = getChapter({ novelID: novelId, chapter_number: chapterNumber });
  return chapter;
}

export function HydrateFallback() {
  return <LoadingScreen />;
}

export default function ChapterPage({ loaderData }: Route.ComponentProps) {
  const { chapter_content, chapter_number, chapter_name, novel_id } = loaderData;
  const navigation = useNavigation();
  const isNavigating = navigation.state !== 'idle';

  // Convert plain content to paragraphs
  const contentParagraphs = chapter_content.split('\n\n').filter(Boolean);

  const prevChapterLink =
    chapter_number > 1 ? `/${novel_id}/${chapter_number - 1}` : `/${novel_id}`;

  const nextChapterLink = `/${novel_id}/${chapter_number + 1}`;

  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <header className="mb-8 border-b pb-6">
        <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center space-x-2">
            <Link
              to={`/${novel_id}`}
              className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary"
            >
              <ChevronLeft className="mr-1 h-4 w-4" />
              Back to Novel
            </Link>
          </div>
        </div>

        <div className="flex justify-between pt-4 items-center">
          <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
            Chapter {chapter_number}
          </h1>
          <div className="flex items-center space-x-2">
            <Button
              asChild
              variant="outline"
              size="sm"
              className="h-8 px-3"
              disabled={chapter_number <= 1}
            >
              <Link prefetch="viewport" to={prevChapterLink} aria-label="Previous chapter">
                <ChevronLeft className="h-4 w-4 mr-1" />
                <span className="hidden sm:inline">Previous</span>
              </Link>
            </Button>

            <Button asChild variant="outline" size="sm" className="h-8 px-3">
              <Link prefetch="viewport" to={nextChapterLink} aria-label="Next chapter">
                <span className="hidden sm:inline">Next</span>
                <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </Button>
          </div>
        </div>
        <h2 className="mt-2 text-xl text-muted-foreground">{chapter_name}</h2>
      </header>

      {isNavigating ? (
        <LoadingScreen />
      ) : (
        <div className="prose prose-gray mx-auto max-w-3xl dark:prose-invert">
          {contentParagraphs.map((paragraph, index) => (
            <p key={index} className="my-4 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      )}

      <div className="mt-12 flex flex-col justify-between space-y-4 border-t pt-6 md:flex-row md:space-x-4 md:space-y-0">
        <Button asChild variant="outline" className="md:w-auto" disabled={chapter_number <= 1}>
          <Link prefetch="viewport" to={prevChapterLink}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
            Previous Chapter
          </Link>
        </Button>

        <Button asChild className="md:w-auto">
          <Link to={nextChapterLink}>
            Next Chapter
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-2"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </Link>
        </Button>
      </div>
    </div>
  );
}
