import PropTypes from 'prop-types';

export const WakaTimeChart = ({ isDarkMode }) => {
  const getChartUrl = () => {
    const timestamp = new Date().getTime();
    const baseUrl = isDarkMode
      ? "https://wakatime.com/share/@timeless_residents/814d458d-c33e-4971-8edf-8226682782f2.svg"
      : "https://wakatime.com/share/@timeless_residents/9fefbc3d-38ad-47fb-a01e-f533271cc4a3.svg";
    return `${baseUrl}?_=${timestamp}`;
  };

  return (
    <div className="w-full h-[300px] overflow-hidden">
      <embed 
        key={isDarkMode ? 'dark' : 'light'}
        src={getChartUrl()}
        className="w-full h-full"
        style={{ transform: 'scale(1.2)', transformOrigin: 'center' }}
      />
    </div>
  );
};

WakaTimeChart.propTypes = {
  isDarkMode: PropTypes.bool.isRequired
};
