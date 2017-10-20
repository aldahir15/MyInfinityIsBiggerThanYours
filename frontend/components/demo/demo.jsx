import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Typist from 'react-typist';
import NumberSet from './number_set';
import anime from 'animejs'; 
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    color                 : 'black',
    width                 : '90%'
  }
};

class Demo extends React.Component {
  constructor(props){
    super(props);
    this.render = this.render.bind(this);
    this.handleNewNumber = this.handleNewNumber.bind(this);
    this.animate = this.animate.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = { 
      play: true, 
      numbers: [], 
      modalIsOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
  }

  handleNewNumber(){
    this.animate();
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  animate(){
    for (var i = 0; i < this.state.numbers.length; i++) {
      document.getElementsByClassName(`circle-${i}`)[0].style.borderColor = "red";
    }
    for (let i = 0; i < this.state.numbers.length; i++) {
      const xaxis = (-63.2) + (2.4)*(i);
      const yaxis = (3.1) + (0.9)*(i);
      anime({
        targets: `.circle-${i}`,
        translateY: `${yaxis}rem`,
        translateX: `${xaxis}rem`,
        scale: [.75, .9],
        delay: function(el, index) {
          return index * 80;
        },
        loop: false,
        complete: () => {
          if (document.getElementsByClassName("resultNum")[0]) {
            document.getElementsByClassName("wrap")[0].removeChild(document.getElementsByClassName("resultNum")[0]);
            let div = document.createElement("DIV");
            let num = "";
            let finalnum = "";
            for (var i = 0; i < this.state.numbers.length; i++) {
              num += String(this.state.numbers[i])[i+2] || "0";
            }
            for (var i = 0; i < num.length; i++) {
              finalnum += String(parseInt(num[i]) + 1)
            }
            let text = document.createTextNode(`0.${finalnum}`);
            div.appendChild(text);
            div.className = "resultNum";
            document.getElementsByClassName("wrap")[0].appendChild(div);
            document.getElementById(`${this.state.numbers.length}`).value = parseInt(finalnum);
          } else {
            let div = document.createElement("DIV");
            let num = "";
            let finalnum = "";
            for (var i = 0; i < this.state.numbers.length; i++) {
              num += String(this.state.numbers[i])[i+2] || "0";
            }
            for (var i = 0; i < num.length; i++) {
              finalnum += String(parseInt(num[i]) + 1)
            }
            let text = document.createTextNode(`0.${finalnum}`);
            div.appendChild(text);
            div.className = "resultNum";
            document.getElementsByClassName("wrap")[0].appendChild(div);
            document.getElementById(`${this.state.numbers.length}`).value = parseInt(finalnum);
          }
        }
      });
    }
  }

  handleReset(){
    this.refs.child.startReset();
    this.setState({numbers: []});
  }


  render() {
    return (
      <div className="first-wrap">
      <div className="wrap-wrap">
        <div className="wrap">
          <div className="demo-button-div">
            <a onClick={() => this.refs.child.handleRandom()}>Random Set</a>
            <div className="demo-divider"></div>
            <a onClick={this.handleReset}>Reset</a>
            <div className="demo-divider"></div>
            <a id="new-num" onClick={this.handleNewNumber}>Find a New Number!</a>
            <div className="demo-divider"></div>
            <a id="new-num" onClick={this.openModal}>Confused? Click Here</a>
            <Modal
              isOpen={this.state.modalIsOpen}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <div className="modal-close-div">
                <button className="modal-close" onClick={this.closeModal}>close</button>
              </div>
              <h2 ref={subtitle => this.subtitle = subtitle}>INSTRUCTIONS</h2>
              <div className="vertical-instructions-div">
                <div className="vertical-instruction">
                  <h4>MANUALLY</h4>
                  <p>Start by inputting in a number and pressing enter to make more, when you want to find a new number click "FIND A NEW NUMBER". If you want to reset the set click on "RESET".</p>
                  <img className="image-help" src={"https://thumbs.gfycat.com/DimAdoredFinwhale-size_restricted.gif"}/>
                </div>
                <div className="vertical-instruction2">
                  <h4>AUTOMATIC</h4>
                  <p>If you're feeling lazy click on "RANDOM SET" and then on "FIND A NEW NUMBER" to get a random set populated which you can modify and keep on adding onto.</p>
                  <img className="image-help" src={"https://thumbs.gfycat.com/UnevenSorrowfulClumber-size_restricted.gif"} />
                </div>
              </div>
            </Modal>
          </div>
          <div className="demo-container"><NumberSet ref="child" parent={this} /></div>
        </div>
        <div className="circle-container">
        {this.state.numbers.map((num) =>
          <div key={num} id="circle-demo" className={`circle-${this.state.numbers.indexOf(num)}`}></div>)}
          </div>
      </div>
      </div>
    );
  }

}

export default Demo;
