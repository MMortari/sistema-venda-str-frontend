import React, { Component, Fragment } from 'react';
import './App.scss';

import Menu from './components/Menu';

class App extends Component {
  
  render() {
    return (
      <div className="full">
        <aside>
          <Menu />
        </aside>
        <main>

        </main>
      </div>
    );
  }

}

export default App;