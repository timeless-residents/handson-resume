import PropTypes from "prop-types";
import { SkillTag } from "./SkillTag";

export const SkillCategory = ({ title, skills }) => (
  <div>
    <h3 className="text-xl font-semibold mb-3 dark:text-white">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <SkillTag key={skill.name} skill={skill} />
      ))}
    </div>
  </div>
);

SkillCategory.propTypes = {
  title: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      icon: PropTypes.elementType.isRequired,
    })
  ).isRequired,
};
