
import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route, HashRouter } from 'react-router-dom';
import Form from './components/pages/Form';
import UserForm  from './components/UserForm';

function App() {
  return (
    <>
      <HashRouter basename='/'>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/userform' component={UserForm} />
        </Switch>
      </HashRouter>
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