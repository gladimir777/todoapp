import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import Login from './components/auth/login/Login';
import Dashboard from './components/dashbord/Dashboard';
import store from './redux/store';
import setAuthToken from './utils';
import { loadUser } from './redux/actions/auth';

import './App.css';

if (localStorage.authToken) {
  setAuthToken(localStorage.authToken);
}
const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <section className="container">
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/dashboard" component={Dashboard} />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
