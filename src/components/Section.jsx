import PropTypes from 'prop-types';

export const Section = ({ title, children, className }) => (
    <section className={`mb-8 ${className}`}>
      <h2 className="text-2xl font-bold mb-4 text-center">{title}</h2>
      {children}
    </section>
  );
  
  Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
  };
  
  Section.defaultProps = {
    className: "",
  };
  