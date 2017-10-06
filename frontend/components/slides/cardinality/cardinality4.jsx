import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Typist from 'react-typist';
import anime from 'animejs';

class Cardinality4 extends React.Component {
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
      'Another concept that we can define is countability, <br/> how we can think about how we would count the numbers in a set. Let’s take for example a set of five numbers, from 1 to 5, a 5 year old would count how many elements are in this set by using their fingers, its very obvious that you are able to go one by one and keep track of the increasing tally. '
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
    this.props.history.push("/cardinality5");
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
          <div className="num-card">{`5 = |{1,2,3,4,5}|`}</div>
          <a className="next-btn" onClick={this.handleSubmit}>Next</a>
        </div>
      </div>
    );
  }
}

export default Cardinality4;
