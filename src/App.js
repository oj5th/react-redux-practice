import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import { useSelector, useDispatch } from "react-redux";
// import { ALL_USERS } from './actions';
import logo from './logo.svg';
import './App.css';

import modules from './modules'; // All the parent knows is that it has modules ...

function App() {
  const [currentTab, setCurrentTab] = useState('dashboard');
  // const users = useSelector(state => state.users);
  // const dispatch = useDispatch();

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ul className="App-nav">
            {modules.map(module => ( // with a name, and routes
              <li key={module.name} className={currentTab === module.name ? 'active' : ''}>
                <Link to={module.routeProps.path} onClick={() => setCurrentTab(module.name)}>{module.name}</Link>
              </li>
            ))}
          </ul>
        </header>
        <div className="App-content">
          {modules.map(module => (
            <Route {...module.routeProps} key={module.name} />
          ))}

          {/* <h1>Users {users.map(user => (
            user.email
          ))}</h1>
          <button onClick={() => dispatch(ALL_USERS())}>SHOW</button> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
