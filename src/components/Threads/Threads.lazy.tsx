import React, { lazy, Suspense } from 'react';

const LazyThreads = lazy(() => import('./Threads'));

const Threads = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyThreads {...props} />
  </Suspense>
);

export default Threads;
