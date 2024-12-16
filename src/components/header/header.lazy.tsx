import React, { lazy, Suspense } from 'react';

const Lazyheader = lazy(() => import('./header'));

const header = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <Lazyheader {...props} />
  </Suspense>
);

export default header;
