import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Typist from 'react-typist';

class Intro extends React.Component {
  constructor(props){
    super(props);
    this.handleNext = this.handleNext.bind(this);
    this.handlePause = this.handlePause.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    this.state = {play: true};
  }

  componentDidMount() {
    const strings=[
      'You might be asking, what do you even mean? <br/> Inifinity isn’t even measurable, how can you even prove that there is even anything larger than a concept of a never ending list of numbers?',
      'I will explain some set theory concepts like^1000 <ul><li>cardinality</li> <li>one-to-one correspondance</li> <li>countable and uncountable sets</li> <li>Cantor’s Diagonal Theorem</li> </ul> ^1000 At the end you will have a demo so you can modify a set to really convince you that my infinity is much bigger than the common notion of an infinity stretching from negative infinity to positive infinity.'
    ];
    const options = {
      strings: strings,
      typeSpeed: 20,
      showCursor: false,
      backDelay: 1000,
      onComplete: this.handleNext
    };
    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
     this.typed.destroy();
   }


  handleNext(){
    setTimeout(() => this.props.history.push("/cardinality"), 2000);
  }

  handleDemo(){
    this.props.history.push("/demo");
  }

  handlePause(){
    this.typed.stop();
    this.setState({play: false});
  }

  handlePlay(){
    this.typed.start();
    this.setState({play: true});
  }

  render() {
    return (
      <div className="wrap">
        {this.state.play === true ?
          <a className="playback-btn"
            onClick={this.handlePause}>Pause</a> :
          <a className="playback-btn"
            onClick={this.handlePlay}>Play</a>}

        <div ref={(el) => { this.el = el; }} className="intro">
        </div>
      </div>
    );
  }

}

export default Intro;
