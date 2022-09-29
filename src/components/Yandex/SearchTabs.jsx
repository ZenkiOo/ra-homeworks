// Вкладки пояса
import style from './yandex.module.css';
import PropTypes from 'prop-types';
const SearchTabs = (props) => {
  const tabsItems = props.items.map((item) => {
    return (
      <li className={style['search__tab_item']} key={item.id}>
        <a className={style['search__tab_item_link']} href={item.href}>
          {item.text}
        </a>
      </li>
    );
  });
  return <ul className={style['search__tab_list']}>{tabsItems}</ul>;
};
SearchTabs.propTypes = {
  items: PropTypes.array,
};
export { SearchTabs };
