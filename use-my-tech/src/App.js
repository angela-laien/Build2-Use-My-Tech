import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import UserPage from './components/UserPage';
import NavBar from './components/NavBar';
import SearchForm from './components/SearchForm';

function App() {
  return (
    <main>
      <NavBar />
      <Route exact path='/' component={Register} />
      <Route path='/Login' component={Login} />
      <Route path='/UserPage' component={UserPage} />
      <Route path='/SearchForm' component={SearchForm} />
    </main>
  );
}

export default App;
