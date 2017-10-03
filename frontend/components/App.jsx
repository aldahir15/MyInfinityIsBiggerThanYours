import React from 'react';
import { Link, Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';


import Nav from './nav/nav_bar';
import Footer from './footer/footer';
import Slide1 from './slides/slide1';
import Slide2 from './slides/slide2';
import Slide3 from './slides/slide3';


class Root extends React.Component {
  render() {
    return(
      <div>
        <Nav/>
        <Switch>
          <Route exact path="/" component={Slide1} />
          <Route exact path="/2" component={Slide2} />
          <Route exact path="/3" component={Slide3} />
        </Switch>
      </div>
    );
  }
}

export default Root;
