import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import './styles/index.css';
import App from './scripts/components/App';
import Todo from './scripts/components/Todo';
import store from './scripts/store';
import * as serviceWorker from './serviceWorker';

const Root = ({ store }) => (
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <div>
          <h2>Home</h2>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/todo">Todo</Link>
              </li>
            </ul>
          </nav>
        </div>

        <Switch>
          <Route path="/todo" component={Todo} />
          <Route path="/" component={App} />
        </Switch>
      </Router>
    </React.StrictMode>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
}

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
