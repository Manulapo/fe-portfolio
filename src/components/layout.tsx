import { useRef } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './footer';
import LeftSidebar from './left-sidebar';
import RightSidebar from './right-sidebar';

const MainLayout = () => {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const leftSidebarHeight = sidebarRef?.current?.getBoundingClientRect().height;

  return (
    <main className="grid grid-cols-12">
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
                top: `-${leftSidebarHeight - 50}px`,
              }
            : {}
        }
      >
        <RightSidebar ref={sidebarRef} />
        <div className="sticky top-20">
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default MainLayout;
