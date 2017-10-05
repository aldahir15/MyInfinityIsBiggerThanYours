import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Typist from 'react-typist';
import anime from 'animejs';

class Question1 extends React.Component {
  constructor(props){
    super(props);
    this.handleNext = this.handleNext.bind(this);
    this.handlePause = this.handlePause.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    this.update = this.update.bind(this);
    this.handleButton = this.handleButton.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {play: true, numbers:[]};
  }

  componentDidMount() {
    const strings=[
      "I feel like i've been talking a lot, how about I let you have some control <br/> Please create a set of any numbers you want!"
    ];
    const options = {
      strings: strings,
      typeSpeed: 20,
      showCursor: false,
      backDelay: 1000,
      onComplete: this.animate,
    };
    this.typed = new Typed(this.el, options);
  }

  animate(){
    const curr = document.getElementsByClassName('num-form-li');
    for (let i = 0; i < curr.length; i++) {
      curr[i].style.backgroundColor = 'white';
    }
    anime({
      targets: '.num-form',
      translateY: '13.5rem',
      scale: [.75, .9],
      delay: function(el, index) {
        return index * 80;
      },
      loop: false,
    });
  }

  componentWillUnmount() {
     this.typed.destroy();
   }


  handleNext(){
    this.props.history.push("/2");
  }

  handlePause(){
    this.typed.stop();
    this.setState({play: false});
  }

  handlePlay(){
    this.typed.start();
    this.setState({play: true});
  }

  update(){
    return (e) => {
      const newArr = this.state.numbers.slice();
      newArr.push(e.target.value);
      this.setState({numbers: newArr});
    };
  }

  handleButton(){
    if (this.state.numbers.length >= 5) {
      document.getElementsByClassName('question-btn')[0].style.color = 'red';
    }
  }

  handleSubmit(){
    if (this.state.numbers.length >= 5) {
      localStorage.setItem('set',this.state.numbers);
      this.props.history.push("/Cardinality2");
    }
  }



  render(){
    return(
      <div>
        <div className="wrap">
          {this.state.play === true ?
            <a className="playback-btn"
              onClick={this.handlePause}>Pause</a> :
            <a className="playback-btn"
              onClick={this.handlePlay}>Play</a>}

          <div ref={(el) => { this.el = el; }} className="intro">
          </div>
        </div>
        <div className="num-form">
          <div>
            <input className= "num-form-li"
            type="number" onChange={this.update()}/>
            <input className= "num-form-li"
            type="number" onChange={this.update()}/>
            <input className= "num-form-li"
            type="number" onChange={this.update()}/>
            <input className= "num-form-li"
            type="number" onChange={this.update()}/>
            <input className= "num-form-li"
            type="number" onChange={this.update()}/>
          </div>
          <a className="question-btn" onClick={this.handleSubmit}>Click Me</a>
        </div>
        {this.handleButton()}
      </div>
    );
  }
}

export default Question1;
