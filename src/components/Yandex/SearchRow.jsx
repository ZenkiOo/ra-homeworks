// Поле для ввода поиска
import style from './yandex.module.css';
const SearchRow = () => {
  return (
    <form className={style['search_form']}>
      <input className={style['search_form_input']} type="text" />
      <button className={style['search_form_btn']} type="submit">
        Найти
      </button>
    </form>
  );
};
export { SearchRow };
