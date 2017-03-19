import React from 'react'
import { browserHistory } from 'react-router'

class Card extends React.Component {
    render() {

    function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
        let itemStyles = {  background: getRandomColor()  }

        return <li>
                <div className="card col-sm-3" onClick={() => window.open(this.props.link,'_blank')}>
                    {this.props.link.match(/\.(jpeg|jpg|gif|png)$/) ? <img className="card-img-top centerImage" src={this.props.link} alt="Note Image"/> : <div style={ itemStyles } id="rectangle"></div>}
                    <div className="card-block">
                        <h4 className="card-title text-center">{this.props.title}</h4>
                        <p className="card-text">{this.props.body}</p>
                    </div>
                </div>
            </li>
    }
}

export default Card