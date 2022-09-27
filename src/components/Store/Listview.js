import style from './store.module.css'
import PropTypes from 'prop-types';
import { ShopItem } from "./ShopItem";
function ListView(props) {
    const listItems = props.items.map((item, idx) => {
      return (
        <li className={style['list__item']} key={idx}>
          <ShopItem item={item}/>
        </li>
      );
    });
    return <ul className={style['list']}>{listItems}</ul>;
  }
  ListView.propTypes = {
    items: PropTypes.array
  };
  export { ListView };