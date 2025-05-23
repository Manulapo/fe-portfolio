import ChatPage from '@/app/routes/chatpage';
import ExperiencePage from '@/app/routes/Experiencepage';
import HomePage from '@/app/routes/Homepage';
import NotFound from '@/app/routes/notFound';
import ProfilePage from '@/app/routes/Profilepage';
import AppLayout from '@/components/appShell';
import MainLayout from '@/components/layout';
import LoadingSection from '@/components/shared/loading-section';
import { Route, Routes, useLocation } from 'react-router-dom';
import MobileRouteGuard from './guards/mobile-guard';
import NetworkPage from './routes/networkpage';
import NotificationPage from './routes/notificationpage';

const AppRouter = () => {
  const location = useLocation();
  const delay = 500; // Delay in milliseconds

  return (
    <Routes location={location}>
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
              <MobileRouteGuard>
                <LoadingSection delay={delay} key={location.pathname}>
                  <ChatPage />
                </LoadingSection>
              </MobileRouteGuard>
            }
          />
          <Route
            path="notification"
            element={
              <LoadingSection delay={delay} key={location.pathname}>
                <NotificationPage />
              </LoadingSection>
            }
          />
          <Route
            path="network"
            element={
              <LoadingSection delay={delay} key={location.pathname}>
                <NetworkPage />
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
            <LoadingSection className='mt-18 md:mt-13' delay={delay} key={location.pathname}>
              <ProfilePage />
            </LoadingSection>
          }
        />
      </Route>
    </Routes>
  );
};

export default AppRouter;
