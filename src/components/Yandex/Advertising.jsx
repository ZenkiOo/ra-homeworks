// Блок с рекламой
import style from './yandex.module.css';
import PropTypes from 'prop-types';
const Advertising = (props) => {
  const { link, img } = props;
  return (
    <a className={style['adverts']} href={link}>
      <img className={style['adverts__img']} src={img} alt="Advertising" />
    </a>
  );
};
Advertising.propTypes = {
  link: PropTypes.string,
  img: PropTypes.string,
};
export { Advertising };
