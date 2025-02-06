import PropTypes from 'prop-types';

const SocialContributionCard = ({ title, period, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-3">{period}</p>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

SocialContributionCard.propTypes = {
  title: PropTypes.string.isRequired,
  period: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default SocialContributionCard;
