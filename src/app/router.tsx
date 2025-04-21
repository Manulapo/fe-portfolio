import MainLayout from '@/components/layout';
import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppLayout from '@/components/appShell';

// Lazy-loaded components
const HomePage = lazy(() => import('@/app/routes/Homepage'));
const JobPage = lazy(() => import('@/app/routes/Job'));
const NotFound = lazy(() => import('@/app/routes/notFound'));

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {/* Always show Navbar via AppShell */}
        <Route element={<AppLayout />}>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="job" element={<JobPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="profile" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
