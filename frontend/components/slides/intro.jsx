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
    this.handleButton = this.handleButton.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
    this.state = {play: true};
  }

  componentDidMount() {
    const strings=[
      'Welcome! <br/> During this demo I will prove to you that my infinity is more infinite than your infinity',
    ];
    const options = {
      strings: strings,
      typeSpeed: 20,
      showCursor: false,
      backDelay: 1000,
      onComplete: this.handleButton
    };
    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
     this.typed.destroy();
   }


  handleNext(){
    this.props.history.push("/2");
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

  handleButton(){
    document.getElementsByClassName('intro-btn')[0].style.color = 'grey';
    document.getElementsByClassName('intro-btn')[1].style.color = 'grey';
    document.getElementsByClassName('divider')[0].style.color = 'white';
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
        <div className="intro-btn-div">
          <a className="intro-btn" onClick={this.handleDemo}>Go To Demo</a>
          <div className="divider">|</div>
          <a className="intro-btn" onClick={this.handleNext}>Learn About Set Theory</a>
        </div>
      </div>
    );
  }

}

export default Intro;
