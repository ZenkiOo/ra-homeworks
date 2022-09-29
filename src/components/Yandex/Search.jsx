// Блок поиска
import style from './yandex.module.css';
import PropTypes from 'prop-types';
import { SearchTabs } from './SearchTabs';
import { SearchRow } from './SearchRow';
const Search = (props) => {
  return (
    <div className={style['search']}>
      <SearchTabs items={props.searchTabs} />
      <SearchRow />
      <div className={style['search__subtext']}>
        <span className={style['search__subtext_text']}>
          Найдется всё. Например,
        </span>
        <a
          className={style['search__subtext_link']}
          href={props.randomSearch.link}
        >
          {props.randomSearch.text}
        </a>
      </div>
    </div>
  );
};
Search.propTypes = {
  searchTabs: PropTypes.array,
  randomSearch: PropTypes.object,
};
export { Search };
