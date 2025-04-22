import AboutCard from './shared/about-card';
import ProfileCard from './shared/profile-card';
import SkillsCard from './shared/skills-card';

const LeftSidebar = () => {
  return (
    <>
      <ProfileCard />
      <AboutCard isTruncated={true}  />
      <SkillsCard />
    </>
  );
};

export default LeftSidebar;
