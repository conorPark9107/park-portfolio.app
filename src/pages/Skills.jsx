import SkillGrid from '../component/skills/SkillGrid';

function Skills() {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-6">사용 기술</h2>
      <h5 className="text-2xl font-bold mb-2 mt-6">backEnd</h5>
      <SkillGrid type="backEnd" />
      <h5 className="text-2xl font-bold mb-2 mt-6">frontEnd</h5>
      <SkillGrid type="frontEnd" />
    </section>
  );
}

export default Skills;
