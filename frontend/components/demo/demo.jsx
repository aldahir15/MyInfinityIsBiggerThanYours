import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Typist from 'react-typist';
import NumberSet from './number_set';
import anime from 'animejs';

class Demo extends React.Component {
  constructor(props){
    super(props);
    this.render = this.render.bind(this);
    this.handleNewNumber = this.handleNewNumber.bind(this);
    this.animate = this.animate.bind(this);
    this.state = {play: true, numbers: []};
  }

  componentDidMount() {
  }

  handleNewNumber(){
    this.animate();
  }

  animate(){
    const xaxis =
    document.getElementsByClassName('circle-0')[0].style.color = 'white';
    anime({
      targets: '#circle-demo',
      translateY: '-31.2rem',
      translateX: '1.6rem',
      scale: [.75, .9],
      delay: function(el, index) {
        return index * 80;
      },
      loop: false,
      complete: () => {
        let div = document.createElement("DIV");
        let num = "";
        for (var i = 0; i < this.state.numbers.length; i++) {
          num += String(this.state.numbers[i])[i] || "0";
        }
        let text = document.createTextNode(num);
        console.log(num);
        div.appendChild(text);
        document.body.appendChild(div);
      }
    });
  }

  render() {
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
          <div key={num} id="circle-demo" className={`circle-${this.state.numbers.indexOf(num)}`}></div>)}
      </div>
    );
  }

}

export default Demo;
