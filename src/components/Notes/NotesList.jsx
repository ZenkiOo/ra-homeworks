import style from './notes.module.css';
import PropTypes from 'prop-types';
import { Note } from './Note';

const NotesList = ({ notes, handleDelete }) => {
  return (
    <div className={style.notes_list}>
      {notes.length
        ? notes.map((note) => (
            <Note key={note.id} note={note} handleDelete={handleDelete} />
          ))
        : null}
    </div>
  );
};

NotesList.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
  handleDelete: PropTypes.func.isRequired,
};

export { NotesList };
