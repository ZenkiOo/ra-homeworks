// Погода
import style from './yandex.module.css';
import PropTypes from 'prop-types';
const Weather = (props) => {
  const { weather } = props;
  return (
    <div className={style['weather']}>
      <div className={style['weather__now']}>
        <span className={style['weather__now_text']}>{weather.now}</span>
      </div>
      <div className={style['weather__all']}>
        <span className={style['weather__all_text']}>
          Утром: {weather.morning}
        </span>
        <span className={style['weather__all_text']}>
          Днем: {weather.evening}
        </span>
      </div>
    </div>
  );
};
Weather.propTypes = {
  weather: PropTypes.object,
};
export { Weather };
