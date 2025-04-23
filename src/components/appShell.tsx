import { Outlet } from 'react-router-dom';
import Navbar from './navbar';
import LoadingSection from './shared/loading-section';

const AppLayout = () => {
  return (
    <div className="flex flex-col md:flex-row w-full h-screen min-h-screen">
      <Navbar />
      <div className="lg:w-[70%] md:w-[100%] w-screen md:pt-18 h-max md:m-auto gap-4 md:px-6 md:mt-4 ">
        <LoadingSection delay={500}>
          <Outlet />
        </LoadingSection>
      </div>
    </div>
  );
};

export default AppLayout;
