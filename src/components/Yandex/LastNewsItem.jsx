// Новость
import style from './yandex.module.css';
const LastNewsItem = (props) => {
  const { item } = props;
  return (
    <a className={style['last_news_item']} href={item.link}>
      <img
        className={style['last_news_img']}
        src={item.itemImg.href}
        alt={item.itemImg.name}
      />
      <span className={style['last_news_text']}>{item.text}</span>
    </a>
  );
};
export { LastNewsItem };
