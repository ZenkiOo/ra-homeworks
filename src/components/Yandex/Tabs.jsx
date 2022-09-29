// Главные вкладки новостей
import style from './yandex.module.css';
import PropTypes from 'prop-types';

const Tabs = (props) => {
  const tabsItems = props.items.map((item) => {
    const btnStyle = { opacity: 0.5 };
    return (
      <button
        type="button"
        className={style['tabs__item']}
        key={item.id}
        style={item.active ? null : btnStyle}
      >
        {item.text}
      </button>
    );
  });
  return (
    <div className={style['tabs']}>
      <div className={style['tabs__list']}>{tabsItems}</div>
      <span className={style['tabs__date']}>{props.date}</span>
    </div>
  );
};
Tabs.propTypes = {
  item: PropTypes.object,
  date: PropTypes.string,
};
export { Tabs };
