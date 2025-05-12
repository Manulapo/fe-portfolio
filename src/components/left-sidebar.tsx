import AboutCard from './shared/about-card';
import InfoCard from './shared/Info-card';
import ProfileCard from './shared/profile-card';

const LeftSidebar = () => {
  return (
    <>
      <ProfileCard />
      <AboutCard isTruncated={true} />
      <InfoCard />
    </>
  );
};

export default LeftSidebar;
