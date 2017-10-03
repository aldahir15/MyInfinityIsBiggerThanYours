import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Typist from 'react-typist';

class Slide2 extends React.Component {
  constructor(props){
    super(props);
  }

  handleNext(){
    this.props.history.push("/3");
  }

  render(){
    return(
      <div>
        <Typist
          className="TypistExample-header"
          avgTypingSpeed={15}
          startDelay={500}
          cursor={{show: false}}
          onTypingDone={this.handleNext()}>
        <div><h2>You might be asking, what do you even mean? Inifinity isn’t even measurable, how can you even prove
that there is even anything larger than a concept of a never ending list of numbers? </h2></div>
        </Typist>
      </div>
    );
  }

}

export default Slide2;
