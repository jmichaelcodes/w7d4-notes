import React from 'react'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'
import store from 'store'
import Note from './Note'
import Card from './Card'



class Main extends React.Component {

    render() {

        if (store.get('notes') === undefined) {
        return  <div>
            <h1 className="instructions">
                It looks like you don't have any notes. Click the button to add one!
            </h1>
            <a className="btn-floating btn-large waves-effect waves-light red pull-right fab" onClick={() => browserHistory.push('/note')}><i className="material-icons">add</i></a>
         </div>
        } else {
            let notes = store.get('notes').map((note, key) => <Card title={note.title} body={note.body} link={note.link} key={key}/>)
            return  <div>        
            <ul className="list-group ulContainer">
             {/*<Card title={store.get('notes')[0].title} body={store.get('notes')[0].body} link={store.get('notes')[0].link}/>*/}
             {notes}
           
        </ul>

        <a className="btn-floating btn-large waves-effect waves-light red pull-right fab" onClick={() => browserHistory.push('/note')}><i className="material-icons">add</i></a>

        </div>
        }

    }
}

export default Main