
import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Form from './components/pages/Form';
import UserForm  from './components/UserForm';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/userform' component={UserForm} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

{/*import React from 'react';
import { UserForm } from './components/UserForm';

const App = () => {
  return (
    <div className="App">
      <UserForm />
    </div>
  );
}

export default App;
*/}