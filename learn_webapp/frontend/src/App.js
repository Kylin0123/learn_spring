import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import RootReducer from './reducers/rootReducer'

import HomePage from './pages/homePage/homePage';
import LoginPage from './pages/loginPage/loginPage';
import AllUserPage from './pages/userPage/allUserPage';
import UserPage from './pages/userPage/userPage';
import ErrorPage from './pages/errorPage/errorPage';
import Header from './components/Header';
import Footer from './components/Footer';
import { Drawer, Divider, List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { makeStyles } from '@material-ui/styles';

const store = createStore(RootReducer)

function App() {
  return (
    <div>
      <Provider store={store}>
        <Header />
        <div style={{ marginLeft: 500 }}>
          <BrowserRouter>
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/home" exact component={HomePage} />
              <Route path="/login" exact component={LoginPage} />
              <Route path="/user/all" exact component={AllUserPage} />
              <Route path="/user/:id" component={UserPage} />
              <Route component={ErrorPage} />
            </Switch>
          </BrowserRouter>
        </div>
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
