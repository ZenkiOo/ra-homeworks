import React, { Component } from 'react';
import style from './watches.module.css';

export default class AddWatchesForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      timezone: '',
    };
  }

  onNameChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  onTimezoneChange = (e) => {
    this.setState({
      timezone: e.target.value,
    });
  };

  onSubmitForm = (e) => {
    e.preventDefault();
    this.props.onAdd(this.state);
    this.setState({
      name: '',
      timezone: '',
    });
  };

  render() {
    return (
      <form className={style.add_watches_form} onSubmit={this.onSubmitForm}>
        <div className={style.add_watches_form__item}>
          <label className={style.add_watches_form__label} htmlFor="name">
            Название
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className={style.add_watches_form__input}
            placeholder="Введите название часов"
            onChange={this.onNameChange}
            value={this.state.name}
          />
        </div>
        <div className={style.add_watches_form__item}>
          <label className={style.add_watches_form__label} htmlFor="timezone">
            Временная зона
          </label>
          <input
            id="timezone"
            name="timezone"
            type="text"
            className={style.add_watches_form__input}
            placeholder="Введите смещение в часах"
            onChange={this.onTimezoneChange}
            value={this.state.timezone}
          />
        </div>

        <button type="submit" className={style.add_watches_form__btn}>
          Добавить
        </button>
      </form>
    );
  }
}
