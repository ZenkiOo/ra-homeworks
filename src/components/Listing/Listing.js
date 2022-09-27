import style from './listing.module.css';
import PropTypes from 'prop-types';
import { ListItem } from './ListItem';

const Listing = (props) => {
  return (
    <div className={style['item-list']}>
      {props.items.map((item) => {
        if (item.state === 'active') {
          return <ListItem key={item.listing_id} item={item} />;
        } else return null;
      })}
    </div>
  );
};

Listing.defaultProps = {
  items: [],
};

Listing.propTypes = {
  items: PropTypes.array,
};
export { Listing };
