import { Suspense, lazy, useState, useEffect } from 'react';

// Dynamic import for Spline to avoid SSR issues
const Spline = lazy(() => import('@splinetool/react-spline'));

interface SplineViewerProps {
  scene?: string;
  className?: string;
}

const SplineFallback = ({ hasError = false }: { hasError?: boolean }) => (
  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-transparent rounded-xl">
    {hasError ? (
      <div className="text-center space-y-2">
        <div className="w-16 h-16 mx-auto bg-primary/20 rounded-full flex items-center justify-center">
          <div className="w-8 h-8 bg-primary/40 rounded-full animate-pulse" />
        </div>
        <p className="text-xs text-muted-foreground">3D Scene Loading...</p>
      </div>
    ) : (
      <div className="w-16 h-16 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
    )}
  </div>
);

export default function SplineViewer({ 
  scene,
  className = "w-full h-full"
}: SplineViewerProps) {
  const [hasError, setHasError] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    // Only render Spline if we have a valid scene URL
    if (scene && scene.startsWith('https://')) {
      setShouldRender(true);
    }
  }, [scene]);

  // If no scene provided or error, show fallback
  if (!scene || !shouldRender || hasError) {
    return (
      <div className={className}>
        <SplineFallback hasError={hasError} />
      </div>
    );
  }

  return (
    <div className={className}>
      <Suspense fallback={<SplineFallback />}>
        <Spline 
          scene={scene}
          style={{ width: '100%', height: '100%', background: 'transparent' }}
          onError={() => setHasError(true)}
        />
      </Suspense>
    </div>
  );
}