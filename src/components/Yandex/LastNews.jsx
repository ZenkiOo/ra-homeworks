// Блок с новостями
import style from './yandex.module.css';
import PropTypes from 'prop-types';
import { LastNewsItem } from './LastNewsItem';
import { CurrencyExchange } from './CurrencyExchange';
import { MainNewsItem } from './MainNewsItem';

const LastNews = (props) => {
  const newsItems = props.items.map((item) => {
    return (
      <li className="items__item" key={item.id}>
        <LastNewsItem item={item} />
      </li>
    );
  });

  return (
    <div className={style['last_news']}>
      <div className={style['last_news__list_wrap']}>
        <ul className={style['last_news__list']}>{newsItems}</ul>
        <CurrencyExchange items={props.currency} />
      </div>
      <div className={style['last_news__main']}>
        {<MainNewsItem item={props.mainNewsItem} />}
      </div>
    </div>
  );
};
LastNews.propTypes = {
  items: PropTypes.array,
  currency: PropTypes.array,
  mainNewsItem: PropTypes.object,
};
export { LastNews };
