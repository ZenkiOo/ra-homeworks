import React, { Component } from 'react';
import style from './watches.module.css';
import moment from 'moment';

export default class Watches extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: moment()
        .utcOffset(this.props.timezone * 60)
        .format('LTS'),
    };
  }

  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick() {
    this.setState({
      time: moment()
        .utcOffset(this.props.timezone * 60)
        .format('LTS'),
    });
  }

  render() {
    return (
      <>
        <span className={style.watches__name}>{this.props.name} -</span>
        <span className={style.watches__time}>{this.state.time}</span>
        <button
          type="button"
          className={style.watches__delete}
          onClick={this.props.onDelete}
        >
          X
        </button>
      </>
    );
  }
}
