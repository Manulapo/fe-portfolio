import { useIsMobile } from '@/hooks/use-mobile';
import { Outlet } from 'react-router-dom';
import ChatBar from './chat';
import Footer from './footer';
import LeftSidebar from './left-sidebar';
import Navbar from './navbar';
import RightSidebar from './right-sidebar';

const Layout = () => {
  const isMobile = useIsMobile();

  return (
    <div className="flex flex-col md:flex-row w-full h-screen min-h-screen relative">
      <Navbar />
      <main className="lg:w-[70%] md:w-[90%] w-screen md:pt-18 h-full md:m-auto grid grid-cols-12 gap-4 md:px-6 md:mt-4 relative">
        {/* Left Sidebar */}
        <div className="col-span-3 space-y-4 h-max hidden md:block">
          <LeftSidebar />
        </div>

        {/* Main Feed */}
        <div className="md:px-2 md:col-span-6 col-span-12 h-max pt-12 md:pt-0 pb-15">
          <div className="md:space-y-4 space-y-2">
            <Outlet />
          </div>
        </div>

        <div className="col-span-3 space-y-4 h-max m-0 hidden md:block">
          <RightSidebar />
          <Footer />
          {!isMobile && <ChatBar />}
        </div>
      </main>
    </div>
  );
};

export default Layout;
