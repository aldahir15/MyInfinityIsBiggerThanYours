import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Typist from 'react-typist';

class Slide3 extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <Typist
          className="TypistExample-header"
          avgTypingSpeed={10000}
          startDelay={500}
          cursor={{show: false}}>
        <div><h2>I will explain some set theory concepts like
        <ul>
          <li>cardinality</li>
          <li>one-to-one correspondance</li>
          <li>countable and uncountable sets</li>
          <li>Cantor’s Diagonal Theorem</li>
        </ul>
        At the end you will have a demo so you can modify a set to really convince you that
        my infinity is much bigger than the common notion of an infinity stretching from negative
        infinity to positive infinity.
        </h2></div>
        </Typist>
      </div>
    );
  }

}

export default Slide3;
