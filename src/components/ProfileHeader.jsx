import PropTypes from 'prop-types';

export const ProfileHeader = ({ name, title, imageSrc }) => (
  <div className="mb-8 flex flex-col items-center">
    <img 
      src={imageSrc} 
      alt={name} 
      className="rounded-full w-32 h-32 mx-auto mb-4 border-4 border-gray-200 dark:border-gray-700"
    />
    <h1 className="text-4xl font-bold dark:text-white">{name}</h1>
    <p className="text-gray-600 dark:text-gray-400 text-xl">{title}</p>
  </div>
);

ProfileHeader.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
};