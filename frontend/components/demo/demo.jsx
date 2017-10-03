import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Typist from 'react-typist';
import NumberSet from './number_set';

class Demo extends React.Component {
  constructor(props){
    super(props);
    this.render = this.render.bind(this);
    this.state = {play: true, numbers: []};
  }

  componentDidMount() {
  }

  render() {
    console.log(this.state);
    return (
      <div className="wrap">
        <div className="demo-button-div">
          <a className="">Random Set</a>
          <div className="demo-divider"></div>
          <a>Reset</a>
          <div className="demo-divider"></div>
          <a>Find a New Number!</a>
        </div>
        <div className="demo-container"><NumberSet parentSetState={this.setState} parentState={this.state} /></div>
      </div>
    );
  }

}

export default Demo;
