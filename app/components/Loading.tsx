import { cn } from '~/lib/utils';

type SpinnerProps = {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
};

export function Spinner({ size = 'md', className }: SpinnerProps) {
  const sizeClasses = {
    sm: 'size-4',
    md: 'size-8',
    lg: 'size-12',
  };

  return (
    <div className={cn('relative', className)}>
      <div
        className={cn(
          sizeClasses[size],
          'animate-spin rounded-full border-2 border-gray-200 border-t-primary dark:border-gray-700 dark:border-t-primary'
        )}
      />
    </div>
  );
}

export function LoadingScreen() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center space-y-4 p-8">
      <Spinner size="lg" />
      <p className="text-sm text-muted-foreground animate-pulse">Loading...</p>
    </div>
  );
}
