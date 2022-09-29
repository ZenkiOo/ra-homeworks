// Обмен
import style from './yandex.module.css';
import PropTypes from 'prop-types';
const CurrencyExchange = (props) => {
  const CurrencyItems = props.items.map((item) => {
    return (
      <li className={style['currency__item']} key={item.id}>
        <span className={style['currency__item_name']}>{item.name}</span>
        <span className={style['currency__item_value']}>{item.value}</span>
        <span className={style['currency__item_diff']}>{item.diff}</span>
      </li>
    );
  });
  return (
      <div className={style['currency']}>
        <ul className={style['currency__list']}>{CurrencyItems}</ul>
        <button type='button'>...</button>
      </div>
    );
};
CurrencyExchange.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  diff: PropTypes.string,
};
export { CurrencyExchange };
