import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

export const ProjectCard = ({ title, description }) => {
  const { t } = useTranslation();
  
  return (
    <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
      <h4 className="font-bold dark:text-white">{t(title)}</h4>
      <p className="text-sm text-gray-600 dark:text-gray-300">{t(description)}</p>
    </div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
