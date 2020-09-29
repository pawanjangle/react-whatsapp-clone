import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Sidebar from "./Sidebar";
import Chat from './Chat';
function App() {
  return (
    <div className="App">
      <div className = "app_body">
      <Router>
      <Switch>
        <Sidebar/>
      <Route path ="/rooms/:roomId">
      <Chat/>
      </Route>
      <Route path ="/">
      <h1>home screen</h1>
      </Route>
      </Switch>
      </Router>
      </div>
    </div>
  );
}

export default App;