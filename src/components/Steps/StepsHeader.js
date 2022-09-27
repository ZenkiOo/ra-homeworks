import style from './steps.module.css';
const StepsHeader = (props) => {
  return (
    <div className={style['header']}>
      <span className={style['header__item']}>Дата (ДД.ММ.ГГ)</span>
      <span className={style['header__item']}>Пройдено км</span>
      <span className={style['header__item']}>
        {props.actions ? 'Действия' : ''}
      </span>
    </div>
  );
};
export { StepsHeader };
