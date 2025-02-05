import PropTypes from 'prop-types';

export const ProfileHeader = ({ name, title, imageSrc }) => (
  <div className="mb-8 flex flex-col items-center">
    <img 
      src={imageSrc} 
      alt={name} 
      className="w-48 h-48 rounded-full object-cover mb-4 shadow-lg"
    />
    <h1 className="text-4xl font-bold">{name}</h1>
    <p className="text-gray-600 text-xl">{title}</p>
  </div>
);

ProfileHeader.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
};
