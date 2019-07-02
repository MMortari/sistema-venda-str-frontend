import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './../node_modules/jquery/dist/jquery.min.js';
import './../node_modules/bootstrap/scss/bootstrap.scss';
import './App.scss';

import Header from './components/Header';
import Menu from './components/Menu';
import DashboardMain from './pages/DashboardMain';

class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
        <div className="full">
          <Header />
          <div className="content">
            <Menu />
            <main>
              <Route exact path="/" component={DashboardMain} />
            </main>
          </div>
        </div>
      </BrowserRouter>
    );
  }

}

export default App;