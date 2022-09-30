import { useState } from 'react';
import style from './notes.module.css';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import NoteModel from './NoteModel';

const AddForm = ({ handleAdd }) => {
  const [form, setForm] = useState({ content: '' });

  const handleChange = (evt) => {
    const { value } = evt.target;
    setForm({ content: value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const note = new NoteModel(shortid.generate(), form.content);
    handleAdd(note);
    setForm({ content: '' });
  };

  return (
    <form className={style.note_form} onSubmit={handleSubmit}>
      <label className={style.note_form__label} htmlFor="note_input">
        Новая запись
      </label>
      <textarea
        className={style.note_form__input}
        rows="3"
        id="note_input"
        value={form.content}
        onChange={handleChange}
        required
      />
      <button className={style.note_form__btn}>&#10148;</button>
    </form>
  );
};

AddForm.propTypes = {
  handleAdd: PropTypes.func.isRequired,
};

export { AddForm };
