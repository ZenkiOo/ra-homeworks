import PropTypes from 'prop-types';
const CardImage = (props) => {
  const { href, name } = props;
  return <img src={href} alt={name} />;
};
CardImage.propTypes = {
  href: PropTypes.string,
  name: PropTypes.string,
};
export { CardImage };
