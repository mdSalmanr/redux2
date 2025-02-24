import "./App.css"
import React, { Fragment } from 'react'
import Counter from './Components/Counter'
import Auth from "./Components/Auth"
import Header from "./Components/Header"
import { useSelector } from "react-redux"
import UserProfile from "./Components/UserProfile"
const App = () => {
  const authe = useSelector(state=>state.auth.isAuthenticate);
  return (
    <Fragment>
      
      <Header/>
      {!authe && <Auth/>}
      {authe && <UserProfile/>}
      
     <Counter/>
    </Fragment>
  )
}

export default App