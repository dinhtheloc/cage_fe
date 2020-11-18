
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Admin from './layout/Admin';
import Login from './pages/Login/Login';
import LoginCallback from './pages/Login/LoginCallback';
import Logout from './pages/Login/Logout';
import './style.css';


function App() {
  const resourceUrl = '/assets/js/app.min.js';
  useEffect(() => {
    const script = document.createElement('script');
    script.src = resourceUrl;
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
  }, [resourceUrl]);
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/login-callback">
          <LoginCallback />
        </Route>
        <Route path="/logout">
          <Logout />
        </Route>
        <Route path="/">
          <Admin></Admin>
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
