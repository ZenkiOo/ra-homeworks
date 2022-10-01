import PropTypes from 'prop-types';
import style from './details.module.css';
const DetailsCard = ({ info }) => {
  return (
    <div className={style.card}>
      <img className={style.card__img} src={info?.avatar} alt="img" />
      <h5>{info?.name}</h5>
      <ul>
        <li>City: {info?.details.city}</li>
        <li>Company: {info?.details.company}</li>
        <li>Position: {info?.details.position}</li>
      </ul>
    </div>
  );
};
DetailsCard.propTypes = {
  info: PropTypes.object,
};
export { DetailsCard };
