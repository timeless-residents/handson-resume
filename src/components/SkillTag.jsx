import PropTypes from 'prop-types';

export const SkillTag = ({ skill }) => (
    <span className="bg-white px-3 py-1 rounded-full text-sm">{skill}</span>
  );
  
  SkillTag.propTypes = {
    skill: PropTypes.string.isRequired,
  };
  