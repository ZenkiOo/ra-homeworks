import style from './cards.module.css';
import PropTypes from 'prop-types';
const CardBody = (props) => {
  const { title, text } = props;
  return (
    <>
      <h2 className={style['card_title']}>{title}</h2>
      <p className={style['card_text']}>{text}</p>
    </>
  );
};
CardBody.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};
export { CardBody };
