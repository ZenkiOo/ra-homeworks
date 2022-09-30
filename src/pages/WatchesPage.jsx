import React, { Component } from 'react';
import shortid from 'shortid';
import style from '../components/Watches/watches.module.css';
import AddWatchesForm from '../components/Watches/AddWatchesForm';
import WatchesList from '../components/Watches/WatchesList';

class WatchesPage extends Component {
  state = {
    data: [
      { name: 'Moscow', timezone: '3', id: shortid.generate() },
      { name: 'London', timezone: '1', id: shortid.generate() },
    ],
  };

  addItem = (body) => {
    const newItem = {
      name: body.name,
      timezone: body.timezone,
      id: shortid.generate(),
    };

    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr,
      };
    });
  };

  deleteItem = (id) => {
    this.setState(({ data }) => {
      const index = data.findIndex((el) => el.id === id);
      const newArr = [...data.slice(0, index), ...data.slice(index + 1)];

      return {
        data: newArr,
      };
    });
  };

  render() {
    return (
      <div className={style.watches_page}>
        <AddWatchesForm onAdd={this.addItem} />
        <WatchesList watches={this.state.data} onDelete={this.deleteItem} />
      </div>
    );
  }
}

export default WatchesPage;
