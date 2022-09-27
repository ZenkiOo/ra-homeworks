import style from './portfolio.module.css';
import PropTypes from 'prop-types';
const Toolbar = (props) => {
  const onSelect = (e, filterName) => {
    props.onSelectFilter(filterName);
  };

  const filtersList = props.filters.map((item, idx) => {
    return (
      <li className={style['filters__item']} key={idx}>
        <button
          className={style['filters__tag']}
          key={item + idx}
          onClick={(e) => onSelect(e, item)}
        >
          {item}
        </button>
      </li>
    );
  });
  return <ul className={style['filters__list']}>{filtersList}</ul>;
};
Toolbar.propTypes = {
  filters: PropTypes.array,
  onSelectFilter: PropTypes.func,
};
export { Toolbar };
