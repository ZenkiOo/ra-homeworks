// Телепрограмма
import style from './yandex.module.css';
import PropTypes from 'prop-types';
const TimeTable = (props) => {
  const listItems = props.items.map((item) => {
    return (
      <a className={style['time_table__item']} href={item.href} key={item.id}>
        <span className={style['time_table__item_time']}>{item.time}</span>
        <span className={style['time_table__item_name']}>{item.name}</span>
        <span className={style['time_table__item_channel']}>
          {item.channel}
        </span>
      </a>
    );
  });
  return <ul className={style['time_table__list']}>{listItems}</ul>;
};
TimeTable.propTypes = {
  items: PropTypes.array,
};
export { TimeTable };
