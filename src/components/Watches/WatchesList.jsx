import style from './watches.module.css';
import Watches from './Watches';

export default function WatchesList({ watches, onDelete }) {
  const elements = watches.map((item) => {
    return (
      <li key={item.id} className={style.watches_list__item}>
        <Watches
          name={item.name}
          timezone={item.timezone}
          onDelete={() => onDelete(item.id)}
        />
      </li>
    );
  });

  return <ul className={style.watches_list}>{elements}</ul>;
}
