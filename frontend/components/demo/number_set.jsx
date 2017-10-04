import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Typist from 'react-typist';

class Demo extends React.Component {
  constructor(props){
    super(props);
    this.handleEnter = this.handleEnter.bind(this);
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

  render() {
    return (
      <div className="demo-input-div">
        {this.state.inputs.map((input) =>
          <div key={input} className="div-number"><p>0.</p><input type="number"
          step="any" placeholder="12345..." className={input} onKeyPress={this.handleEnter}></input></div>)}
      </div>
    );
  }

}

export default Demo;
