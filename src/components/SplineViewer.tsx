import { Suspense, lazy } from 'react';

// Dynamic import for Spline to avoid SSR issues
const Spline = lazy(() => import('@splinetool/react-spline'));

interface SplineViewerProps {
  scene?: string;
  className?: string;
}

const SplineFallback = () => (
  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-transparent rounded-xl">
    <div className="w-16 h-16 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
  </div>
);

export default function SplineViewer({ 
  scene = "https://prod.spline.design/6Wq1Q7YGyM-iab9X/scene.splinecode",
  className = "w-full h-full"
}: SplineViewerProps) {
  return (
    <div className={className}>
      <Suspense fallback={<SplineFallback />}>
        <Spline 
          scene={scene}
          style={{ width: '100%', height: '100%', background: 'transparent' }}
        />
      </Suspense>
    </div>
  );
}