import PropTypes from 'prop-types';

export const SkillTag = ({ skill }) => (
  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm">
    {skill}
  </span>
  );
  
  SkillTag.propTypes = {
    skill: PropTypes.string.isRequired,
  };
  