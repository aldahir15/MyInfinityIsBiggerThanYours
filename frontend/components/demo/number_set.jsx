import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Typist from 'react-typist';

class Demo extends React.Component {
  constructor(props){
    super(props);
    this.handleEnter = this.handleEnter.bind(this);
    this.state = {inputs: ['input1']};
  }

  componentDidMount() {
  }

  handleEnter(e) {
    if(e.key === 'Enter'){
      const inputs = this.state.inputs;
      inputs.push('input2');
      this.setState({inputs: inputs});
      const numbers = this.props.parentState.numbers;
      numbers.push(e.target.value);
      this.props.parentSetState({numbers: numbers});
    }
  }

  render() {
    return (
      <div className="demo-input-div">
        {this.state.inputs.map((input) =>
          <input type="number"
          step="any" placeholder="0.12345" onKeyPress={this.handleEnter}></input>)}
      </div>
    );
  }

}

export default Demo;
