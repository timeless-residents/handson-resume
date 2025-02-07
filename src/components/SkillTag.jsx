import PropTypes from 'prop-types';

export const SkillTag = ({ skill }) => {
  const Icon = skill.icon;
  return (
    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm flex items-center gap-2">
      {Icon && <Icon className="w-4 h-4" />}
      {skill.name}
    </span>
  );
};

SkillTag.propTypes = {
  skill: PropTypes.shape({
    name: PropTypes.string.isRequired,
    icon: PropTypes.elementType,
  }).isRequired,
};
