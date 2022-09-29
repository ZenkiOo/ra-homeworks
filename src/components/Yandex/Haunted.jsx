// Посещаемое
import style from './yandex.module.css';
import PropTypes from 'prop-types';
const Haunted = (props) => {
  const listItems = props.items.map((item) => {
    return (
      <a className={style['haunted__item']} href={item.href} key={item.id}>
        {item.text}
      </a>
    );
  });
  return <ul className={style['haunted__list']}>{listItems}</ul>;
};
Haunted.propTypes = {
  items: PropTypes.array,
};
export { Haunted };
