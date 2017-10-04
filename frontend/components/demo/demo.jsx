import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Typist from 'react-typist';
import NumberSet from './number_set';

class Demo extends React.Component {
  constructor(props){
    super(props);
    this.render = this.render.bind(this);
    this.handleNewNumber = this.handleNewNumber.bind(this);
    this.state = {play: true, numbers: []};
  }

  componentDidMount() {
  }

  handleNewNumber(){
    this.animate();
  }

  animate(){
    document.getElementsByClassName('circle-0')[0].style.color = 'white';
    anime({
      targets: '.num-card',
      translateY: '7rem',
      scale: [.75, .9],
      delay: function(el, index) {
        return index * 80;
      },
      loop: false,
    });
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
          <a onClick={this.handleNewNumber}>Find a New Number!</a>
        </div>
        <div className="demo-container"><NumberSet parent={this} /></div>
        {this.state.numbers.map((num) =>
          <div id="circle-demo" className={`circle-${this.state.numbers.indexOf(num)}`}></div>)}
      </div>
    );
  }

}

export default Demo;
