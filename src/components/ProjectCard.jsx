import PropTypes from 'prop-types';

export const ProjectCard = ({ title, description }) => (
    <div className="bg-gray-50 p-4 rounded-lg">
      <h4 className="font-bold">{title}</h4>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
  
  ProjectCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  };