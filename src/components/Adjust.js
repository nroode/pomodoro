import React, { Component } from 'react';
import '../style/Adjust.css';



export default class Adjust extends Component {
  render() {
    return (
      <div id={this.props.id}>
        
          <div id="adjust">
            <h3>{this.props.title}</h3>
            <button className="btn"><i className="fas fa-arrow-up"></i></button>
            <div>{this.props.time}</div>
            <button className="btn"><i className="fas fa-arrow-down"></i></button>
          </div>
        
      </div>
    );
  }
}