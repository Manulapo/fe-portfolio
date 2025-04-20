import { useIsMobile } from '@/hooks/use-mobile';
import { Outlet } from 'react-router-dom';
import ChatBar from './chat';
import Footer from './footer';
import LeftSidebar from './left-sidebar';
import Navbar from './navbar';
import RightSidebar from './right-sidebar';
import { useRef } from 'react';

const Layout = () => {
  const isMobile = useIsMobile();
  const sidebarRef = useRef<HTMLDivElement>(null);
  const leftSidebarHeight = sidebarRef?.current?.getBoundingClientRect().height;

  return (
    <div className="flex flex-col md:flex-row w-full h-screen min-h-screen">
      <Navbar />
      <main className="lg:w-[70%] md:w-[90%] w-screen md:pt-18 h-max md:m-auto grid grid-cols-12 gap-4 md:px-6 md:mt-4">
        {/* Left Sidebar */}
        <div className="col-span-3 space-y-4 h-max m-0 hidden md:block sticky top-20">
          <LeftSidebar />
        </div>

        {/* Main Feed */}
        <div className="md:px-2 md:col-span-6 col-span-12 h-auto pt-12 md:pt-0 pb-15">
          <div className="md:space-y-4 space-y-2">
            <Outlet />
          </div>
        </div>

        <div
          className="col-span-3 space-y-4 h-max m-0 hidden md:block sticky"
          style={
            leftSidebarHeight
              ? {
                  top: `-${leftSidebarHeight -50}px`,
                }
              : {}
          }
        >
          <RightSidebar ref={sidebarRef} />
          <div className="sticky top-20">
            <Footer />
          </div>
          {!isMobile && <ChatBar />}
        </div>
      </main>
    </div>
  );
};

export default Layout;
