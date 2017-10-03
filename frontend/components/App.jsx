import React from 'react';
import { Link, Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';


import Nav from './nav/nav_bar';
import Footer from './footer/footer';
import Intro from './slides/Intro';
import Cardinality from './slides/cardinality';
import Question1 from './slides/questions/question1';


class Root extends React.Component {
  render() {
    return(
      <div>
        <Nav/>
        <Switch>
          <Route exact path="/" component={Intro} />
          <Route exact path="/cardinality" component={Cardinality} />
          <Route exact path="/question1" component={Question1} />
        </Switch>
      </div>
    );
  }
}

export default Root;
