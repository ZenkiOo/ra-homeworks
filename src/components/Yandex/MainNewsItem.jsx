// Главная новость
import style from './yandex.module.css';
const MainNewsItem = (props) => {
  return (
    <>
      <img
        className={style['main_news_item_img']}
        src={props.item.img.href}
        alt={props.item.img.name}
      />
      <h2 className={style['main_news_item_title']}>{props.item.title}</h2>
      <span className={style['main_news_item_text']}>{props.item.text}</span>
    </>
  );
};
export { MainNewsItem };
