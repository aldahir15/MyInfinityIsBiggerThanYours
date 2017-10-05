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
    this.handleReset = this.handleReset.bind(this);
    this.state = {play: true, numbers: []};
  }

  componentDidMount() {
  }

  handleNewNumber(){
    this.animate();
  }

  animate(){
    for (var i = 0; i < this.state.numbers.length; i++) {
      document.getElementsByClassName(`circle-${i}`)[0].style.borderColor = "red";
    }
    for (let i = 0; i < this.state.numbers.length; i++) {
      const xaxis = (-63.2) + (2.4)*(i);
      const yaxis = (3.1) + (0.9)*(i);
      anime({
        targets: `.circle-${i}`,
        translateY: `${yaxis}rem`,
        translateX: `${xaxis}rem`,
        scale: [.75, .9],
        delay: function(el, index) {
          return index * 80;
        },
        loop: false,
        complete: () => {
          if (document.getElementsByClassName("resultNum")[0]) {
            document.getElementsByClassName("wrap")[0].removeChild(document.getElementsByClassName("resultNum")[0]);
            let div = document.createElement("DIV");
            let num = "";
            let finalnum = "";
            for (var i = 0; i < this.state.numbers.length; i++) {
              num += String(this.state.numbers[i])[i+2] || "0";
            }
            for (var i = 0; i < num.length; i++) {
              finalnum += String(parseInt(num[i]) + 1)
            }
            let text = document.createTextNode(`0.${finalnum}`);
            div.appendChild(text);
            div.className = "resultNum";
            document.getElementsByClassName("wrap")[0].appendChild(div);
            document.getElementById(`${this.state.numbers.length}`).value = parseInt(finalnum);
          } else {
            let div = document.createElement("DIV");
            let num = "";
            let finalnum = "";
            for (var i = 0; i < this.state.numbers.length; i++) {
              num += String(this.state.numbers[i])[i+2] || "0";
            }
            for (var i = 0; i < num.length; i++) {
              finalnum += String(parseInt(num[i]) + 1)
            }
            let text = document.createTextNode(`0.${finalnum}`);
            div.appendChild(text);
            div.className = "resultNum";
            document.getElementsByClassName("wrap")[0].appendChild(div);
            document.getElementById(`${this.state.numbers.length}`).value = parseInt(finalnum);
          }
        }
      });
    }
  }

  handleReset(){
    this.refs.child.startReset();
    this.setState({numbers: []});
  }


  render() {
    return (
      <div className="wrap-wrap">
        <div className="wrap">
          <div className="demo-button-div">
            <a onClick={() => this.refs.child.handleRandom()}>Random Set</a>
            <div className="demo-divider"></div>
            <a onClick={this.handleReset}>Reset</a>
            <div className="demo-divider"></div>
            <a onClick={this.handleNewNumber}>Find a New Number!</a>
          </div>
          <div className="demo-container"><NumberSet ref="child" parent={this} /></div>
        </div>
        <div className="circle-container">
        {this.state.numbers.map((num) =>
          <div key={num} id="circle-demo" className={`circle-${this.state.numbers.indexOf(num)}`}></div>)}
          </div>
      </div>
    );
  }

}

export default Demo;
