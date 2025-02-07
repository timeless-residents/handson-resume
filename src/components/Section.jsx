import PropTypes from 'prop-types';

export function Section({ title, children }) {
  return (
    <section className="my-8">
      <h2 className="text-2xl font-bold mb-4 dark:text-white">{title}</h2>
      <div className="dark:text-gray-300">{children}</div>
    </section>
  );
}
Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};