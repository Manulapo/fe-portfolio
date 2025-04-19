import { Outlet } from 'react-router-dom';
import Footer from './footer';
import LeftSidebar from './left-sidebar';
import Navbar from './navbar';
import RightSidebar from './right-sidebar';
import ChatBar from './chat';

const Layout = () => {
  return (
    <div className="flex flex-col md:flex-row w-full h-screen min-h-screen relative">
      <Navbar />
      <main className="md:w-[70%] md:pt-18 w-full h-full md:m-auto grid grid-cols-12 gap-4 px-6 mt-4 relative">
        {/* Left Sidebar */}
        <div className="col-span-3 space-y-4 h-max">
          <LeftSidebar />
        </div>

        {/* Main Feed */}
        <div className="px-2 col-span-6 h-[98vh] pb-20">
          <div className="space-y-4">
            <Outlet />
          </div>
        </div>

        <div className="col-span-3 space-y-4 h-max m-0 relative">
          <RightSidebar />
          <Footer />
          <ChatBar />
        </div>
      </main>
    </div>
  );
};

export default Layout;
