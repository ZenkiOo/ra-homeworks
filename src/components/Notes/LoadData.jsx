import style from './notes.module.css';
import PropTypes from 'prop-types';

const LoadData = ({ loadData }) => {
  return (
    <>
      <span>Заметки</span>
      <button className={style.reload_btn} type="button" onClick={loadData}>
        &#8634;
      </button>
    </>
  );
};

LoadData.propTypes = {
  loadData: PropTypes.func.isRequired,
};

export { LoadData };
