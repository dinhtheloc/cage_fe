
import { Component, useEffect } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import Admin from './layout/Admin';
import Login from './pages/Login/Login';

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
          <Route exact path="/">
            <Admin></Admin>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
    </Router>

  );
}

export default App;
