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
      'At this point, you might be wondering, if infinity times 2 is the same size as infinity, then any addition, multiplication, powering actually doesnt change the cardinality of infinity, and you’re right, it doesn’t. Instead we have to think about different sets, uncountable sets. <br/> A set is uncountable if we can’t make a one-to-one correspondance with the set of Natural numbers. Well how do we create an uncountable set? Glad you asked. Think about fractions and decimals, we need a very large set, the set of all Real numbers, ℝ. The set of Real numbers rational (5) and irrational numbers (pi) stretching from negative infinity to positive infinity.'
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
          <img className="first-img" src="http://res.cloudinary.com/ddgt25kwb/image/upload/c_scale,w_750/v1507309856/real_gnxpm8.jpg"/>
          <a className="next-btn" onClick={this.handleSubmit}>Next</a>
        </div>
      </div>
    );
  }
}

export default Cardinality9;
