import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';

class Nav extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="header">
        <Link to="/"><h1>MY INFINITY IS BIGGER THAN YOURS</h1></Link>
      </div>
    );
  }

}

export default Nav;
