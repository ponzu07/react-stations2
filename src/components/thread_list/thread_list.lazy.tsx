import React, { lazy, Suspense } from 'react';

const Lazythread_list = lazy(() => import('./thread_list'));

const thread_list = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <Lazythread_list {...props} />
  </Suspense>
);

export default thread_list;
