import type { Route } from './+types/home';
import { Welcome } from '../welcome/welcome';
import { Spinner } from '~/components/Loading';

export function meta(_args: Route.MetaArgs) {
  return [
    { title: 'Blackbook - Novel Reading Platform' },
    { name: 'description', content: 'A modern novel reading platform' },
  ];
}

export function HydrateFallback() {
  return (
    <div className="flex h-[80vh] items-center justify-center">
      <div className="flex flex-col items-center space-y-4">
        <Spinner size="lg" className="text-primary" />
        <p className="text-sm text-muted-foreground animate-pulse">Loading your experience...</p>
      </div>
    </div>
  );
}

export default function Home() {
  return <Welcome />;
}
