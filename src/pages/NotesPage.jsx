import { Component } from 'react';
import axios from 'axios';
import style from '../components/Notes/notes.module.css'
import { LoadData } from '../components/Notes/LoadData';
import { AddForm } from '../components/Notes/AddForm';
import { NotesList } from '../components/Notes/NotesList';

class NotesPage extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
    };
    this.notesURL = 'http://localhost:7777/notes';
  }

  componentDidMount() {
    this.loadNotes();
  }

  loadNotes = () => {
    axios
      .get(this.notesURL)
      .then((response) => this.setState({ notes: response.data }));
  };

  handleAdd = (note) => {
    axios.post(this.notesURL, note).then(() => this.loadNotes());
  };

  handleDelete = (id) => {
    axios.delete(`${this.notesURL}/${id}`).then(() => this.loadNotes());
  };

  render() {
    return (
      <div className={style.notes_page}>
        <div className={style.notes}>
          <LoadData loadData={this.loadNotes} />
          <NotesList
            notes={this.state.notes}
            handleDelete={this.handleDelete}
          />
          <AddForm handleAdd={this.handleAdd} />
        </div>
      </div>
    );
  }
}

export default NotesPage;
