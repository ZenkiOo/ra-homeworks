import style from './steps.module.css';
const Step = (props) => {
  const { step, onStepClick, onStepEdit } = props;
  return (
    <>
      <div className={style['step__item']}>
        <span>{step.date}</span>
      </div>
      <div className={style['step__item']}>
        <span>{step.traveled}</span>
      </div>
      <div className={style['step__item']}>
        <button
          onClick={() => onStepEdit(step.id)}
          type="button"
          name="edit"
          className={style['step__btn']}
        >
          <i 
          style={step.onEdit ? {color: 'red'}: {}}
          className="material-icons">edit</i>
        </button>
        <button
          onClick={() => onStepClick(step.id)}
          type="button"
          name="delete"
          className={style['step__btn']}
        >
          <i className="material-icons">cancel</i>
        </button>
      </div>
    </>
  );
  // return <button onClick={() => onStepClick(step.id)}>{JSON.stringify(step)}</button>;
};
export { Step };
