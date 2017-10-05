import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Typist from 'react-typist';

class Demo extends React.Component {
  constructor(props){
    super(props);
    this.handleEnter = this.handleEnter.bind(this);
    this.handleTab = this.handleTab.bind(this);
    this.startReset = this.startReset.bind(this);
    this.newInput = this.newInput.bind(this);
    this.state = {inputs: [0], fakeinputs: []};
  }

  componentDidMount() {
  }

  handleEnter(e) {
    if(e.key === 'Enter'){
      const numbers = this.props.parent.state.numbers;
      const inputs = this.state.inputs;
      if (numbers[e.target.id]) {
        numbers[numbers.length - 1] = parseFloat(`0.${e.target.value}`);
      } else {
        numbers.push(parseFloat(`0.${e.target.value}`));
      }
      this.props.parent.setState({numbers: numbers});
      let fakeinputs = this.state.fakeinputs;
      if (numbers.length === inputs.length || numbers.length === fakeinputs.length) {
        inputs.push(inputs[inputs.length - 1] + 1);
        fakeinputs.push(fakeinputs[fakeinputs.length - 1] + 1);
      }
      this.setState({inputs: inputs, fakeinputs: fakeinputs});
    }
  }

  newInput(){
    const inputs = this.state.inputs;
    inputs.push(inputs.length);
    this.setState({inputs});
  }

  startReset(){
    this.setState({inputs: [0]});
    document.getElementById("0").value = "";
  }

  handleTab(){
    // document.getElementById(String(this.state.inputs.length-2)).focus();
  }

  handleRandom(){
    const SET = [0.1234567897, 0.863528176, 0.9876543210, 0.54273652342, 0.832742397821, 0.938742349872];
    // this.setState({numbers: SET});
    this.setState({inputs: []});
    for (var i = 0; i < SET.length + 1; i++) {
      if (i === SET.length) {
        let fakeinputs = this.state.fakeinputs;
        fakeinputs.push(i);
        this.setState({fakeinputs: fakeinputs});
        let div = document.createElement("DIV");
        div.className = "div-number";
        let input = document.createElement("INPUT");
        input.className = "number-trial";
        input.id = i;
        let put = document.createElement("P");
        let text = document.createTextNode(`0.`);
        input.onkeypress = this.handleEnter;
        put.appendChild(text);
        div.appendChild(put);
        div.appendChild(input);
        document.getElementsByClassName("demo-input-div")[0].appendChild(div);
      } else {
        let fakeinputs = this.state.fakeinputs;
        fakeinputs.push(i);
        this.setState({fakeinputs: fakeinputs});
        let parentNums = this.props.parent.state.numbers;
        parentNums.push(SET[i]);
        this.props.parent.setState({numbers: parentNums});
        let div = document.createElement("DIV");
        div.className = "div-number";
        let input = document.createElement("INPUT");
        input.className = "number-trial";
        input.id = i;
        let put = document.createElement("P");
        let text = document.createTextNode(`0.`);
        put.appendChild(text);
        input.value = parseInt(String(SET[i]).slice(2));
        div.appendChild(put);
        div.appendChild(input);
        document.getElementsByClassName("demo-input-div")[0].appendChild(div);
      }
    }
    console.log(this.props.parent.state);
  }

  render() {
    console.log(document.getElementsByClassName("number-trial"));
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
