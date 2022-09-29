import style from './cards.module.css';
import PropTypes from 'prop-types';
const Card = (props) => {
  return (
    <div className={style['card']}>
      {props.image}
      <div className={style['card_body']}>{props.children}</div>
    </div>
  );
};
Card.propTypes = {
  image: PropTypes.element,
};
export { Card };
