import Layout from '@/components/layout';
import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFound from './routes/notFound';

// Lazy-loaded components
const Home = lazy(() => import('@/app/routes/Homepage'));
const ExperiencePage = lazy(() => import('@/app/routes/Experience'));
// const NotFound = lazy(() => import('@/app/routes/NotFound'));

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {/* Layout Route */}
        <Route path="/" element={<Layout />}>
          {/* Default Route */}
          <Route index element={<Home />} />

          {/* Other Child Routes */}
          <Route path="job" element={<ExperiencePage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
