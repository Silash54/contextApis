import React from 'react'
import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from './context/UserContextProvider';
import './App.css';
function App() {
  return (
    <UserContextProvider>
      <div className='login'>
        <div className='internal'>
          <h1>App pages</h1>
          <Login />
          <Profile />
        </div>

      </div>
    </UserContextProvider>
  )
}

export default App
