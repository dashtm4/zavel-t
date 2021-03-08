import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LoginPage from "./pages/auth/LoginPage";
import Dashboard from "./pages/Dashboard";

import "./styles/index.scss";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            <LoginPage />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
