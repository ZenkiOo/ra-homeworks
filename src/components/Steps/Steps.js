import style from './steps.module.css';
import { Step } from './Step';
const Steps = (props) => {
  const { items, onRemove, onEdit } = props;
  const listItems = items.map((item) => {
    return (
      <li className={style['steps__item']} key={item.id}>
        <Step
          onStepClick={onRemove}
          onStepEdit={onEdit}
          step={item}
        />
      </li>
    );
  });
  return props.items.length ? (
    <ul className={style['steps__list']}>{listItems}</ul>
  ) : null;
};

Steps.defaultProps = {
  items: [],
};
export { Steps };
