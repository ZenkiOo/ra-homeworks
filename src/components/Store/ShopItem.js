import style from './store.module.css';
import PropTypes from 'prop-types';
function ShopItem(props) {
  const { item } = props;
  return (
    <div className={style['item']}>
      <img alt={item.name} className={style['img']} src={item.img} />
      <span className={style['name']}>{item.name}</span>
      <span className={style['color']}>{item.color}</span>
      <span className={style['price']}>{item.price}$</span>
      <button className={style['cart_btn']}>
        <i className="material-icons">shopping_cart</i>
      </button>
    </div>
  );
}
ShopItem.propTypes = {
  item: PropTypes.object,
};
export { ShopItem };
