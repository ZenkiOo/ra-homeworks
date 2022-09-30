import style from './notes.module.css';
import PropTypes from 'prop-types';

const Note = ({ note, handleDelete }) => {
  return (
    <div className={style.note}>
      <span className={style.note__content}>{note.content}</span>
      <button className={style.note__delete} onClick={() => handleDelete(note.id)}>
        &#10006;
      </button>
    </div>
  );
};

Note.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.number,
    content: PropTypes.string,
    handleDelete: PropTypes.func,
  }),
};

export { Note };
