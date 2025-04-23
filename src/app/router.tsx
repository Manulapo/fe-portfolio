import { Suspense } from 'react';
import { Loader } from 'lucide-react';
import { Route, Routes, useLocation } from 'react-router-dom';
import AppLayout from '@/components/appShell';
import MainLayout from '@/components/layout';
import LoadingSection from '@/components/shared/loading-section';
import ProfilePage from './routes/Profilepage';
import HomePage from '@/app/routes/Homepage';
import ExperiencePage from '@/app/routes/Experiencepage';
import ChatPage from '@/app/routes/chatpage';
import NotFound from '@/app/routes/notFound';

const AppRouter = () => {
  const location = useLocation();
  const delay = 500; // Delay in milliseconds

  return (
    <Suspense fallback={<Loader className="w-full mx-auto animate-spin" />}>
      <Routes location={location}>
        {/* Always show Navbar via AppShell */}
        <Route element={<AppLayout />}>
          <Route path="/" element={<MainLayout />}>
            <Route
              index
              element={
                <LoadingSection delay={delay} key={location.pathname}>
                  <HomePage />
                </LoadingSection>
              }
            />
            <Route
              path="experience"
              element={
                <LoadingSection delay={delay} key={location.pathname}>
                  <ExperiencePage />
                </LoadingSection>
              }
            />
            <Route
              path="chat"
              element={
                <LoadingSection delay={delay} key={location.pathname}>
                  <ChatPage />
                </LoadingSection>
              }
            />
            <Route
              path="*"
              element={
                <LoadingSection delay={delay} key={location.pathname}>
                  <NotFound />
                </LoadingSection>
              }
            />
          </Route>
          <Route
            path="profile"
            element={
              <LoadingSection delay={delay} key={location.pathname}>
                <ProfilePage />
              </LoadingSection>
            }
          />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRouter;