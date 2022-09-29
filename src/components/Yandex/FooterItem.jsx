// Обертка единицы футера
import style from './yandex.module.css';
import PropTypes from 'prop-types';
const FooterItem = (props) => {
  return (
    <div className={style['footer__item']}>
      <h3 className={style['footer__item_title']}>{props.title}</h3>
      <div className={style['footer__item_content']}>{props.children}</div>
    </div>
  );
};
FooterItem.propTypes = {
  title: PropTypes.string,
};
export { FooterItem };
