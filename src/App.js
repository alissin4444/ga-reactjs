import { useEffect } from 'react';

import {
  Switch,
  Route,
  Link,
  withRouter,
  useLocation
} from "react-router-dom";

import ReactGA from 'react-ga';

import Home from './pages/Home'
import About from './pages/About'
import Users from './pages/Users'

ReactGA.initialize('UA-208736407-1', {
  debug: true,
});

function App() {
  const location = useLocation()

  useEffect(() => {
    ReactGA.pageview(location.pathname);
  }, [location.pathname])

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
