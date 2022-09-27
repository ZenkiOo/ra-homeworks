import { useState } from 'react';
const FormPage = () => {
  const [form, setForm] = useState({
    name: '',
    score: 'good',
    agreement: false,
  });
  const handleChange = (e) => {
    const { target } = e;
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.type);
    console.log(form);
  };
  return (
    <section className='form_page'>
      <form onSubmit={onSubmit}>
        <div>
          <label>Ваше имя </label>
          <input
            id='name'
            name='name'
            value={form.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Выберите уровень удовлетворённости </label>
          <select id='satisfaction' name='satisfaction' value={form.score} onChange={handleChange}>
            <option value='good'>Хорошо</option>
            <option value='bad'>Плохо</option>
          </select>
        </div>
        <div>
          <label htmlFor='agreement'>
            <input
              id='agreement'
              name='agreement'
              type='checkbox'
              onChange={handleChange}
            />
            Согласен на передачу перс. данных
          </label>
        </div>
        <button type='submit'>Отправить</button>
      </form>
    </section>
  );
};
export { FormPage };
