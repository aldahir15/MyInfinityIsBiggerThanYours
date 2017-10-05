import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Typist from 'react-typist';
import anime from 'animejs';

class Cardinality5 extends React.Component {
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
      'We can be even define this more technically by saying that any countable set is either a subset of natural numbers or the set of natural numbers, meaning that it exists within the set of all Natural numbers or it is it, which is the set of positive integers but now including negative infinity to -1 and 0.'
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
      translateY: '7rem',
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
        <div>
          <div className="num-card">{`Z = {…,-5,-4,-3,-2,-1,0,1,2,3,4,5,…}`}</div>
          <a className="next-btn" onClick={this.handleSubmit}>Next</a>
        </div>
      </div>
    );
  }
}

export default Cardinality5;
