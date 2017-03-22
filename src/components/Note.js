import React from 'react'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'
import store from 'store'

class Note extends React.Component {
    constructor(props) {
        super(props)

        this.onClick = this.onClick.bind(this)

        this.state = {
            title: '',
            body: '',
            link: '',
            tags: ''
        }

    }

    onClick(addNote) {
        // Call parent addTodo method
        addNote(this.state.title, this.state.body, this.state.link, this.state.tags)

        // Sets state of fields, and triggers render() again
        this.setState({
            title: '',
            body: '',
            link: '',
            tags: ''
        })
    }

    render() {
        var notes = store.get('notes')

        if (!notes) {
            notes = []
        }

        notes.push(this.state)


        return <div>
            <a className="waves-effect waves-light btn backButton" onClick={() => browserHistory.push('/')}><i className="material-icons left">fast_rewind</i>Back</a>
            <input type="text" className="form-control" placeholder="Enter note title" value={this.state.title} onChange={(e) => this.setState({ title: e.target.value })} />
            <div className="form-group">
                <label htmlFor="enterNote">Note</label>
                <textarea className="form-control" rows="10" id="enterNote" value={this.state.body} onChange={(e) => this.setState({ body: e.target.value })}></textarea>
            </div>
            <input type="text" className="form-control" placeholder="Enter link" value={this.state.link} onChange={(e) => this.setState({ link: e.target.value })} />

            <div className="btn-group" role="group" aria-label="..." >
                <button type="button" className="btn btn-lg" value="Back-Burner">Back-Burner</button>
                <button type="button" className="btn btn-lg">Class</button>
                <button type="button" className="btn btn-lg">Homework</button>
                <button type="button" className="btn btn-lg">Personal</button>
                <button type="button" className="btn btn-lg">Urgent</button>
            </div>
            <br />

            {/*<a className="btn-floating btn-large waves-effect waves-light red pull-right fab" onClick={() => console.log(notesArray)}>view</a>*/}

            <a className="btn-floating btn-large waves-effect waves-light red pull-right fab" onClick={() =>
                {store.set('notes', notes); alert('Your note has been saved'); browserHistory.push('/') }}><i className="material-icons left">save</i></a>
        </div>

    }
}

export default Note;