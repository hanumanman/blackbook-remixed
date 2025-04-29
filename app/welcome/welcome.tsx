import { Button } from '~/components/ui/button';
import logoDark from './logo-dark.svg';
import logoLight from './logo-light.svg';
import { Link } from 'react-router';

export function Welcome() {
  return (
    <main className="container mx-auto flex flex-col items-center justify-center px-4 py-16">
      <div className="flex max-w-5xl flex-col items-center gap-16">
        <header className="flex flex-col items-center gap-9">
          <div className="w-full max-w-[500px] p-4">
            <img src={logoLight} alt="Blackbook" className="block w-full dark:hidden" />
            <img src={logoDark} alt="Blackbook" className="hidden w-full dark:block" />
          </div>
          <h1 className="text-center text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
            Discover your next great read
          </h1>
          <p className="text-center text-lg text-muted-foreground">
            A modern novel reading platform with a beautiful reading experience
          </p>
        </header>

        <div className="grid w-full max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Feature cards */}
          <div className="flex flex-col rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md">
            <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-book-open"
              >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-medium">Vast Library</h3>
            <p className="text-muted-foreground">
              Access thousands of novels across multiple genres
            </p>
          </div>

          <div className="flex flex-col rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md">
            <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-bookmark"
              >
                <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-medium">Bookmarking</h3>
            <p className="text-muted-foreground">Save your reading progress automatically</p>
          </div>

          <div className="flex flex-col rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md">
            <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-moon"
              >
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-medium">Dark Mode</h3>
            <p className="text-muted-foreground">Comfortable reading day or night</p>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center space-y-4">
          <h2 className="text-2xl font-semibold">Get Started</h2>
          <Button
            className="text-md animate-pulse px-8 py-6"
            size="lg"
            onClick={() => (window.location.href = '/1')}
          >
            Browse Novels
          </Button>
        </div>

        <div className="mt-8 rounded-xl border bg-card p-6 shadow-sm">
          <h3 className="mb-4 text-center text-lg font-medium">Resources</h3>
          <ul className="grid gap-2 md:grid-cols-2">
            {resources.map(({ href, text, icon }) => (
              <li key={href}>
                <Link
                  className="flex items-center gap-3 rounded-md p-3 text-blue-700 transition-colors hover:bg-accent hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                  to={href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {icon}
                  <span>{text}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}

const resources = [
  {
    href: 'https://reactrouter.com/docs',
    text: 'React Router Docs',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-gray-600 dark:text-gray-300"
      >
        <path d="M12 12.5v-.25M21 21c-1.9 1.9-7.2-.6-12-5.4s-7.3-10.1-5.4-12 7.2.6 12 5.4 7.3 10.1 5.4 12z" />
        <path d="M3 21c-1.9-1.9.6-7.2 5.4-12s10.1-7.3 12-5.4" />
      </svg>
    ),
  },
  {
    href: 'https://rmx.as/discord',
    text: 'Join Discord',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-gray-600 dark:text-gray-300"
      >
        <path d="M18.4 4a16.35 16.35 0 0 0-12.8 0" />
        <path d="M5.5 15.5A14.27 14.27 0 0 0 8.9 21" />
        <path d="M18.5 15.5A14.27 14.27 0 0 1 15.1 21" />
        <path d="M9 11v-4a2 2 0 0 1 2-2v0a2 2 0 0 1 2 2v4" />
        <path d="M3 11h18a0 0 0 0 1 0 0v-.5a3.5 3.5 0 0 0-3.5-3.5h-11a3.5 3.5 0 0 0-3.5 3.5V11a0 0 0 0 1 0 0Z" />
      </svg>
    ),
  },
];
