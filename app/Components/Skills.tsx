import { skills } from "@/public/data";
import SectionTitlle from "./SectionTitlle";
import { SkillsCard } from "./SkillsCard";

const Skills = () => {
  return (
    <div className="align-element py-20" id="skills">
      <SectionTitlle text="tech stack" />
      <div className="py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => {
          return <SkillsCard key={skill.id} {...skill} />;
        })}
      </div>
    </div>
  );
};
export default Skills;
