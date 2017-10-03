import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Typist from 'react-typist';

class Slide1 extends React.Component {
  constructor(props){
    super(props);
    this.handleNext = this.handleNext.bind(this);
    this.handlePause = this.handlePause.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    this.state = {play: true};
  }

  componentDidMount() {
    const strings=[
      'Welcome!',
      'During this demo I will prove to you that my infinity is more infinite than your infinity',
      'You might be asking, what do you even mean? Inifinity isn’t even measurable, how can you even prove that there is even anything larger than a concept of a never ending list of numbers?',
    ];
    const options = {
      strings: strings,
      typeSpeed: 20,
      showCursor: false,
      backDelay: 1000,
    };
    this.typed = new Typed(this.el, options);
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

export default Slide1;
