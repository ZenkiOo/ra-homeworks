// Эфир
import style from './yandex.module.css';
import PropTypes from 'prop-types';
const BroadCast = (props) => {
  const listItems = props.items.map((item) => {
    return (
      <a className={style['broadcast__item']} href={item.href} key={item.id}>
        <span className={style['broadcast__item_icon']}>
          <i className="material-icons">smart_display</i>
        </span>
        <span className={style['broadcast__item_name']}>{item.name}</span>
        <span className={style['broadcast__item_channel']}>{item.channel}</span>
      </a>
    );
  });
  return <ul className={style['broadcast__list']}>{listItems}</ul>;
};
BroadCast.propTypes = {
  items: PropTypes.array,
};
export { BroadCast };
