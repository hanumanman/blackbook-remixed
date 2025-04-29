import { getNovelFromId } from '~/db/queries/selects';
import type { Route } from './+types';

export function loader({ params }: Route.LoaderArgs) {
  const novelId = parseInt(params.novelId);

  if (isNaN(novelId)) {
    throw new Error('Invalid novel ID ');
  }

  const novel = getNovelFromId(novelId);
  return novel;
}

export function HydrateFallback() {
  return <div>Loading chapter data...</div>;
}

const NovelPage = ({ loaderData }: Route.ComponentProps) => {
  const { novel_name, novel_description, novel_author, novel_genre, novel_image_link } = loaderData;

  return (
    <div>
      <h1>{novel_name}</h1>
      <p>{novel_description}</p>
      <p>{novel_author}</p>
      <p>{novel_genre}</p>
      <img src={novel_image_link || undefined} alt={novel_name} />
    </div>
  );
};

export default NovelPage;
