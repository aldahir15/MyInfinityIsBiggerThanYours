import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Typist from 'react-typist';
import anime from 'animejs';

class Cardinality6 extends React.Component {
  constructor(props){
    super(props);
    this.handleNext = this.handleNext.bind(this);
    this.handlePause = this.handlePause.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {play: true};
  }

  componentDidMount() {
    const strings=[
      'Obviously we can try to count all the numbers until infinity, but that would be a waste, the only thing that matters is that we know that we could try and not that we dont have the time available to. '
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
    document.getElementsByClassName('num-card')[0].style.color = 'white';
    anime({
      targets: '.num-card',
      translateY: '2rem',
      scale: [.75, .9],
      delay: function(el, index) {
        return index * 80;
      },
      loop: false,
      complete: function() {
        document.getElementsByClassName('next-btn')[0].style.color = 'white';
      }
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

  handleSubmit(){
    this.props.history.push("/sdfjkhsdfjh");
  }

  render(){
    const nums = localStorage.getItem("set");
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
        <div className="wrap-count-lines">
          <div className="num-card" id="lines-wrap">
            {`Countability: {0,1,2,3,4,5,6,7,8,9,10,…}`}
            <div className="lines">
              <svg width="70" height="100"><line x1="0" y1="0" x2="60" y2="350" stroke="white"/></svg>
              <svg width="70" height="100"><line x1="0" y1="0" x2="60" y2="350" stroke="white"/></svg>
              <svg width="70" height="100"><line x1="0" y1="0" x2="60" y2="350" stroke="white"/></svg>
              <svg width="70" height="100"><line x1="0" y1="0" x2="60" y2="350" stroke="white"/></svg>
              <svg width="70" height="100"><line x1="0" y1="0" x2="60" y2="350" stroke="white"/></svg>
              <svg width="70" height="100"><line x1="0" y1="0" x2="60" y2="350" stroke="white"/></svg>
              <svg width="70" height="100"><line x1="0" y1="0" x2="60" y2="350" stroke="white"/></svg>
              <svg width="70" height="100"><line x1="0" y1="0" x2="60" y2="350" stroke="white"/></svg>
              <svg width="70" height="100"><line x1="0" y1="0" x2="60" y2="350" stroke="white"/></svg>
              <svg width="70" height="100"><line x1="0" y1="0" x2="60" y2="350" stroke="white"/></svg>
              <svg width="70" height="100"><line x1="0" y1="0" x2="60" y2="350" stroke="white"/></svg>
              <svg width="70" height="100"><line x1="0" y1="0" x2="60" y2="350" stroke="white"/></svg>

            </div>
            {'1,2,3,4,5,6,7,8,9,10,11'}
          </div>
          <a className="next-btn" onClick={this.handleSubmit}>Next</a>
        </div>
      </div>
    );
  }
}

export default Cardinality6;
