import { getChapter } from '~/db/queries/selects';
import type { Route } from './+types';

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
  return <div>Loading chapter data...</div>;
}

export default function ChapterPage({ loaderData }: Route.ComponentProps) {
  const { chapter_content, chapter_number, chapter_name } = loaderData;

  return (
    <div>
      <h1>{chapter_number}</h1>
      <h2>{chapter_name}</h2>
      <div>{chapter_content}</div>
    </div>
  );
}
