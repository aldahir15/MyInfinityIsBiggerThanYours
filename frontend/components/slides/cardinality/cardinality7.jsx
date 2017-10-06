import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Typist from 'react-typist';
import anime from 'animejs';

class Cardinality7 extends React.Component {
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
      'A way we can bypass having to count everything one by one is with the concept of a one-to-one correspondance, which pretty much is that a set will always have the same cardinality (number of elements) as another set if for each number there is a distinct one-to-one relation to a number in the other set. <br/> For example:'
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
    document.getElementsByClassName('p-lines')[0].style.color = 'white';
    const doops = document.getElementsByClassName('doop');
    for (var i = 0; i < doops.length; i++) {
      document.getElementsByClassName('doop')[i].style.stroke = 'red';
    }
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
        <div className="lets-wrap-this">
          <div className="num-card" id="lines-wrap">
            {`A = {1,2,3,4,5}`}
            <div className="lines2">
              <svg width="70" height="100"><line className="doop" x1="20" y1="350" x2="0" y2="0" stroke="black"/></svg>
              <svg width="70" height="100"><line className="doop" x1="20" y1="350" x2="0" y2="0" stroke="black"/></svg>
              <svg width="70" height="100"><line className="doop" x1="20" y1="350" x2="0" y2="0" stroke="black"/></svg>
              <svg width="70" height="100"><line className="doop" x1="20" y1="350" x2="0" y2="0" stroke="black"/></svg>
              <svg width="70" height="100"><line className="doop" x1="20" y1="350" x2="0" y2="0" stroke="black"/></svg>

            </div>
            {'B = {8,7,2,5,9}'}
            </div>
            <p className="p-lines">
              A and B have the same number of elemnts (same cardinality)
              and we can see that for every number in A, there is a number
              in B that we can map it to
            </p>
          </div>
          <a className="next-btn" onClick={this.handleSubmit}>Next</a>
        </div>
      </div>
    );
  }
}

export default Cardinality7;
