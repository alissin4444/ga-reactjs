import { useEffect } from 'react';

import {
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";

import Home from './pages/Home'
import About from './pages/About'
import Users from './pages/Users'

import TagManager from 'react-gtm-module';

function App() {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-MK5JXDS' });
  }, []);

  return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
  );
}

export default withRouter(App);
