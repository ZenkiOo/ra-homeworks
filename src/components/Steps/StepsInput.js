import style from './steps.module.css';
const StepsInput = (props) => {
  const { onFormSubmit, onInputChange, date, traveled} = props;
  return (
    <form className={style["form"]} onSubmit={onFormSubmit}>
      <div className={style["form__item"]}>
        <input className={style["form__input"]} type="text" value={date} name="date" onChange={onInputChange} />
      </div>
      <div className={style["form__item"]}>
        <input className={style["form__input"]} type="text" value={traveled} name="traveled" onChange={onInputChange} />
      </div>
      <div className={style["form__item"]}>
        <button className={style["form__btn"]} type="submit">ok</button>
      </div>
    </form>
  );
};
export { StepsInput };
