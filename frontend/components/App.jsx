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
import Cardinality4 from './slides/cardinality/cardinality4';
import Cardinality5 from './slides/cardinality/cardinality5';
import Cardinality6 from './slides/cardinality/cardinality6';
import Cardinality7 from './slides/cardinality/cardinality7';
import Cardinality8 from './slides/cardinality/cardinality8';
import Cardinality9 from './slides/cardinality/cardinality9';
import Cardinality10 from './slides/cardinality/cardinality10';

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
          <Route exact path="/cardinality4" component={Cardinality4} />
          <Route exact path="/cardinality5" component={Cardinality5} />
          <Route exact path="/cardinality6" component={Cardinality6} />
          <Route exact path="/cardinality7" component={Cardinality7} />
          <Route exact path="/cardinality8" component={Cardinality8} />
          <Route exact path="/cardinality9" component={Cardinality9} />
          <Route exact path="/cardinality10" component={Cardinality10} />

          <Route exact path="/demo" component={Demo} />


        </Switch>
      </div>
    );
  }
}

export default Root;
