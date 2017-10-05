import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Typist from 'react-typist';

class Demo extends React.Component {
  constructor(props){
    super(props);
    this.handleEnter = this.handleEnter.bind(this);
    this.handleTab = this.handleTab.bind(this);
    this.state = {inputs: [0]};
  }

  componentDidMount() {
  }

  handleEnter(e) {
    if(e.key === 'Enter'){
      const numbers = this.props.parent.state.numbers;
      const inputs = this.state.inputs;
      if (numbers[e.target.className]) {
        numbers[numbers.length - 1] = parseFloat(`0.${e.target.value}`);
      } else {
        numbers.push(parseFloat(`0.${e.target.value}`));
      }
      this.props.parent.setState({numbers: numbers});
      if (numbers.length === inputs.length) {
        inputs.push(inputs[inputs.length - 1] + 1);
      }
      this.setState({inputs: inputs});
    }
  }

  handleTab(){
    // document.getElementById(String(this.state.inputs.length-2)).focus();
  }

  handleRandom(){
    const SET = [0.1234567897, 0.863528176, 0.9876543210, 0.54273652342, 0.832742397821, 0.938742349872];
    // this.setState({numbers: SET});
    for (var i = 1; i < SET.length; i++) {
      const inputs = this.state.inputs;
      inputs.push(inputs[inputs.length - 1] + 1);
      this.setState({inputs: inputs});
    }
    for (let j = 0; j < SET.length; j++) {
      const arrInputs = document.getElementsByClassName("number-trial");
      console.log(arrInputs[1]);
      arrInputs[j].value = parseInt(String(SET[j]).slice(2));
      let numbers = this.props.parent.state.numbers;
      numbers.push(SET[j]);
      this.props.parent.setState({numbers: numbers});
    }
  }

  render() {
    return (
      <div className="demo-input-div">
        {this.state.inputs.map((input) =>
          <div key={input} className="div-number"><p>0.</p><input type="number"
          step="any" className="number-trial" placeholder="12345..." id={input} onKeyPress={this.handleEnter}>
          </input></div>)}
          {this.handleTab()}
      </div>
    );
  }

}

export default Demo;
