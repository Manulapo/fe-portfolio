import { forwardRef } from 'react';
import SkillsCard from './shared/skills-card';

const RightSidebar = forwardRef<HTMLDivElement, {}>((_props, ref) => {
  return (
    <div ref={ref}>
      <SkillsCard />
    </div>
  );
});

export default RightSidebar;
