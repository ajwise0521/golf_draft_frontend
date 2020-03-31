import React from 'react';
import Navbar from './Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import DraftPage from './Draft/DraftPage';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar/>
          <Route path="/draft" exact component={DraftPage}/>
        </BrowserRouter>
      </div>
    );

  }
};

export default App;