import style from './listing.module.css';
import PropTypes from 'prop-types';

const ListItem = (props) => {
  console.log(props.item);
  const { url, MainImage, title, currency_code, price, quantity } = props.item;
  let itemPrice;
  let quantityClass;

  if (currency_code === 'USD') {
    itemPrice = `$${price}`;
  } else if (currency_code === 'EUR') {
    itemPrice = `€${price}`;
  } else {
    itemPrice = `${price} ${currency_code}`;
  }

  if (quantity <= 10) {
    quantityClass = `${style['item-quantity']} ${style['level-low']}`;
  } else if (quantity > 10 && quantity <= 20) {
    quantityClass = `${style['item-quantity']} ${style['level-medium']}`;
  } else if (quantity > 20) {
    quantityClass = `${style['item-quantity']} ${style['level-high']}`;
  }

  return (
    <div className={style['item']}>
      <div className={style['item-image']}>
        <a href={url}>
          <img src={MainImage.url_570xN} alt={'img'} />
        </a>
      </div>
      <div className={style['item-details']}>
        <p className={style['item-title']}>
          {title.length > 50 ? `${title.slice(0, 51)}...` : title}
        </p>
        <p className={style['item-price']}>{itemPrice}</p>
        <p className={quantityClass}>{`${quantity} left`}</p>
      </div>
    </div>
  );
};
ListItem.defaultProps = {
  item: {},
};

ListItem.propTypes = {
  item: PropTypes.object,
};
export { ListItem };
