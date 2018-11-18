import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppNavBar from './components/AppNavBar';
import GroceryList from './components/GroceryList';
import ItemModal from './components/ItemModal';
import SignUpModal from './components/SignUpModal';
import SignInModal from './components/SignInModal';
import { Container} from 'reactstrap';
import { Provider } from 'react-redux';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <AppNavBar/>
            <Container>
              <ItemModal/>
              <SignUpModal/>
              <SignInModal/>
              <GroceryList/>
            </Container>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
