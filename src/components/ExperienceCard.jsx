import PropTypes from 'prop-types';

export const ExperienceCard = ({ company, positions }) => (
  <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
    <h3 className="text-xl font-bold mb-2 dark:text-white">{company}</h3>
    {positions.map((position, index) => (
      <div key={index} className={index > 0 ? 'mt-4' : ''}>
        <p className="font-semibold dark:text-gray-200">
          {position.title} ({position.period})
        </p>
        <p className="dark:text-gray-300">{position.description}</p>
        {position.achievements && (
          <ul className="list-disc list-inside text-sm dark:text-gray-300">
            {position.achievements.map((achievement, i) => (
              <li key={i}>{achievement}</li>
            ))}
          </ul>
        )}
      </div>
    ))}
  </div>
);

ExperienceCard.propTypes = {
  company: PropTypes.string.isRequired,
  positions: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      period: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      achievements: PropTypes.arrayOf(PropTypes.string),
    })
  ).isRequired,
};