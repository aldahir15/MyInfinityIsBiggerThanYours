import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Typist from 'react-typist';
import anime from 'animejs';

class Cardinality extends React.Component {
  constructor(props){
    super(props);
    this.handleNext = this.handleNext.bind(this);
    this.handlePause = this.handlePause.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    this.state = {play: true};
  }

  componentDidMount() {
    const strings=[
      'Lets start off with how we even count numbers, lets keep it simple, take for example positive integers, which go from 1 to positive infinity, we symbolize the set of positive integers with ℤ+.'
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
    document.getElementsByClassName('zed')[0].style.color = 'white';
    anime({
      targets: '.zed',
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



  render(){
    return(
      <div className="wrap">
        {this.state.play === true ?
          <a className="playback-btn"
            onClick={this.handlePause}>Pause</a> :
          <a className="playback-btn"
            onClick={this.handlePlay}>Play</a>}

        <div ref={(el) => { this.el = el; }} className="intro">
        </div>
        <div className="zed">{"ℤ+={1,2,3,4,5,6,7,...}"}</div>
      </div>
    );
  }
}

export default Cardinality;
