import MainLayout from '@/components/layout';
import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppLayout from '@/components/appShell';
import ProfilePage from './routes/Profilepage';

// Lazy-loaded components
const HomePage = lazy(() => import('@/app/routes/Homepage'));
const ExperiencePage = lazy(() => import('@/app/routes/Experiencepage'));
const ChatPage = lazy(() => import('@/app/routes/chatpage'));
const NotFound = lazy(() => import('@/app/routes/notFound'));

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {/* Always show Navbar via AppShell */}
        <Route element={<AppLayout />}>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="experience" element={<ExperiencePage />} />
            <Route path="chat" element={<ChatPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="profile" element={<ProfilePage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
