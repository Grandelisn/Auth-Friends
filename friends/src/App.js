import logo from './logo.svg';
import React from 'react'
import {Route, Switch, Link} from 'react-router-dom'
import Login from './Login'
import GetFriends from './components/GetFriends'
import PrivateRoute from './utility/PrivateRoute'
import {axiosWithAuth} from './utility/axiosWithAuth'
import './App.css';

function App() {
  const logout = () =>{
    axiosWithAuth().post('http://localhost:5000/api/logout')
    .then(res => {
      localStorage.removeItem('token')
      window.location.href = '/'
    }).catch(err => {
      console.log('Axios error in App.js: ', err)
    })
  }
  return (
    <div className="App">
      <header className="App-header">
        {localStorage.getItem('token') && (
        <Link to = '/getfriends'>
          Protected Page
        </Link>
        )}
        <Link onClick ={logout}>Logout</Link>
      </header>
      <Switch>
        <PrivateRoute exact path = '/getfriends'>
          <GetFriends/>
        </PrivateRoute>
        <Route path ='/'>
          <Login/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
