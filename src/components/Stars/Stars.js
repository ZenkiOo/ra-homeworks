import style from './stars.module.css';
import { Star } from './Star';
import PropTypes from 'prop-types';
import shortid from 'shortid';

const Stars = (props) => {
  const { count } = props;
  const countArr = () => {
    const arr = [];
    for (let i = 0; i < count; i++) {
      arr.push(true);
    }
    return arr;
  };

  const starsIndex = countArr().map((item) => ({
    id: shortid.generate(),
    value: item,
  }));
  const stars = starsIndex.map((item) => {
    return (
      <li key={item.id}>
        <Star />
      </li>
    );
  });
  
  return (
    <ul
      className={[style['stars'], style['card-body-stars'], style['u-clearfix']]
        .join(' ')
        .trim()}
    >
      {stars}
    </ul>
  );
};
Stars.propTypes = {
  count: PropTypes.number.isRequired,
};
export { Stars };
