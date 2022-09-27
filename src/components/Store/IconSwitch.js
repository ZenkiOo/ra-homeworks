import PropTypes from 'prop-types';
function IconSwitch(props) {
  const { icon, onSwitch } = props;
  return (
    <button onClick={onSwitch}>
      <i className='material-icons'>{icon}</i>
    </button>
  );
}
IconSwitch.propTypes = {
  icon: PropTypes.string,
  onSwitch: PropTypes.func,
};
export { IconSwitch };
