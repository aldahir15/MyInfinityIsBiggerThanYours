import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Typist from 'react-typist';
import anime from 'animejs';

class Cardinality9 extends React.Component {
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
      'Think about this for a second, how would we count all the decimals from 0 to 1? We wouldn’t be able to, there are an infinite amount of numbers between 0 and 1 if we count fractions. This is where Cantor comes to explain all this mess, his Diagonal Argument essentially states that if we were going to write down all of the numbers from 0 to 1, we can always use the diagonals of each number and transform that new number which wil always be a new addition to the numbers from 0 to 1.'
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
    document.getElementsByClassName('first-img')[0].style.display = 'flex';
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
        <div className="wrap-count-lines2">
        <img className="second-img" src="http://res.cloudinary.com/ddgt25kwb/image/upload/c_scale,w_552/v1507310401/set10_e7u4ct.png"/>
        <img className="second-img" src="http://res.cloudinary.com/ddgt25kwb/image/upload/c_scale,w_312/v1507310399/transform10_huaavy.png"/>
          <a className="next-btn" onClick={this.handleSubmit}>Next</a>
        </div>
      </div>
    );
  }
}

export default Cardinality9;
