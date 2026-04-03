import SkillCard from '../SkillCard';
import { backEnd, frontEnd } from '../../../data/skills';

function SkillGrid({ type }) {
  let skills;
  if (type === 'frontEnd') {
    skills = frontEnd;
  } else if (type === 'backEnd') {
    skills = backEnd;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {skills.map((skill) => (
        <SkillCard key={skill.id} name={skill.name} desc={skill.desc} />
      ))}
    </div>
  );
}

export default SkillGrid;
