import React from 'react';
import App from './App';
import { HashRouter } from 'react-router-dom';

class Root extends React.Component {
  render() {
    return(
      <div>
        <HashRouter>
            <App />
        </HashRouter>
      </div>
    );
  }
}

export default Root;
