import style from './store.module.css';
import PropTypes from 'prop-types';
function ShopCard(props) {
  const { card } = props;
  return (
    <div className={style['card']}>
      <img alt={card.name} className={style['img']} src={card.img} />
      <span className={style['name']}>{card.name}</span>
      <span className={style['color']}>{card.color}</span>
      <span className={style['price']}>{card.price}$</span>
      <button className={style['cart_btn']}>
        <i className="material-icons">shopping_cart</i>
      </button>
    </div>
  );
}
ShopCard.propTypes = {
  card: PropTypes.object,
};
export { ShopCard };
