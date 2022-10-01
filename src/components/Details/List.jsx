import PropTypes from 'prop-types';
import style from './details.module.css';
import { useState } from 'react';

const List = ({ list, onActivate }) => {
  const [active, setActive] = useState(null);

  const handleOnActivate = (item) => {
    setActive(() => item.id);
    onActivate(item);
  };

  const listEls = list.map((item) => (
    <li
      key={item.id}
      className={`${style.list__item} ${
        item.id === active ? style.active : ''
      }`}
      onClick={() => handleOnActivate(item)}
    >
      {item.name}
    </li>
  ));
  return <ul className={style.list}>{listEls}</ul>;
};
List.propTypes = {
  list: PropTypes.array,
  onActivate: PropTypes.func,
};
export { List };
