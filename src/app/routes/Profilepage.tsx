import Minifig2 from '@/components/minifig2';
import AboutCard from '@/components/shared/about-card';
import CertificationsCard from '@/components/shared/certifications-card';
import ExperienceCard from '@/components/shared/experience-card';
import ProfileCard from '@/components/shared/profile-card';
import SkillsCard from '@/components/shared/skills-card';
import { useIsMobile } from '@/hooks/use-mobile';

const ProfilePage = () => {
  const isMobile = useIsMobile();
  return (
    <div className="grid grid-cols-12 ">
      <div className="md:px-2 mt-4 md:mt-0 md:col-span-8 col-span-12 h-auto pt-12 md:pt-0 pb-15 relative">
      <Minifig2 className="minifig-hang absolute top-35 right-2/7 max-sm:-right-3 max-sm:top-5 max-sm:z-2 z-0 hidden w-42 sm:block max-sm:block" />
        {/* Main Feed */}
        <div className="space-y-2 ">
          <ProfileCard isProfilePage={true} />
          <AboutCard />
          <ExperienceCard />
          {isMobile && <SkillsCard />}
          <CertificationsCard />
        </div>
      </div>

      <div className="col-span-4 space-y-4 h-max m-0 hidden md:block sticky top-20">
        <SkillsCard />
      </div>
    </div>
  );
};

export default ProfilePage;
