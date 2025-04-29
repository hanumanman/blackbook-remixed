import { Link, Outlet, useNavigation } from 'react-router';
import { LoadingScreen } from '~/components/Loading';

const Layout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="flex min-h-screen flex-col">
        <header className="z-40 px-4 border-b bg-background/95 backdrop-blur">
          <div className="container flex h-16 items-center">
            <Link to="/" className="mr-6 flex items-center space-x-2">
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
                className="text-primary"
              >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
              <span className="text-xl font-bold">Blackbook</span>
            </Link>
            <nav className="flex flex-1 items-center justify-end space-x-4">
              <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">
                Home
              </Link>
              <Link to="/1" className="text-sm font-medium transition-colors hover:text-primary">
                Library
              </Link>
            </nav>
          </div>
        </header>
        <main className="flex-1">
          {isLoading ? (
            <div className="mt-8">
              <LoadingScreen />
            </div>
          ) : (
            <Outlet />
          )}
        </main>
        <footer className="border-t py-6 md:py-0">
          <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
            <p className="text-center text-sm text-muted-foreground md:text-left">
              © {new Date().getFullYear()} Blackbook. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">
                Privacy
              </Link>
              <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">
                Terms
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
