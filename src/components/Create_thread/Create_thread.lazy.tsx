import React, { lazy, Suspense } from 'react';

const LazyCreate_thread = lazy(() => import('./Create_thread'));

const Create_thread = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyCreate_thread {...props} />
  </Suspense>
);

export default Create_thread;
