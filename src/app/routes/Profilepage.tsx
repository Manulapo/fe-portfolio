import RightSidebar from '@/components/right-sidebar';
import AboutCard from '@/components/shared/about-card';
import ExperienceCard from '@/components/shared/experience-card';
import ProfileCard from '@/components/shared/profile-card';
import SkillsCard from '@/components/shared/skills-card';

const ProfilePage = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="md:px-2 md:col-span-8 col-span-12 h-auto pt-12 md:pt-0 pb-15">
        {/* Main Feed */}
        <div className="space-y-2 ">
          <ProfileCard isProfilePage={true} />
          <AboutCard />
          <ExperienceCard />
          <SkillsCard />
        </div>
      </div>

      <div className="col-span-4 space-y-4 h-max m-0 hidden md:block sticky top-20">
        <RightSidebar />
      </div>
    </div>
  );
};

export default ProfilePage;
