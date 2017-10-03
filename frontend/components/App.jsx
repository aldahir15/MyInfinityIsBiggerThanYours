import React from 'react';
import { Link, Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';


import Nav from './nav/nav_bar';
import Footer from './footer/footer';
import Intro from './slides/intro';
import Intro2 from './slides/intro2';
import Cardinality from './slides/cardinality/cardinality';
import Question1 from './slides/questions/question1';
import Cardinality2 from './slides/cardinality/cardinality2';
import Cardinality3 from './slides/cardinality/cardinality3';
import Demo from './demo/demo';



class Root extends React.Component {
  render() {
    return(
      <div>
        <Nav/>
        <Switch>
          <Route exact path="/" component={Intro} />
          <Route exact path="/2" component={Intro2} />
          <Route exact path="/cardinality" component={Cardinality} />
          <Route exact path="/question1" component={Question1} />
          <Route exact path="/cardinality2" component={Cardinality2} />
          <Route exact path="/cardinality3" component={Cardinality3} />
          <Route exact path="/demo" component={Demo} />


        </Switch>
      </div>
    );
  }
}

export default Root;
