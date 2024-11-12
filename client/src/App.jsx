import React from 'react'
import Left from './home/LeftSide/Left'
import Right from './home/RightSide/Right'
import Signup from './components/Signup'
import Login from './components/Login'
import { useAuth } from './context/AuthProvider'
import { Navigate, Route, Routes } from 'react-router-dom'
function App() {

  const [authUser, seAuthUser] = useAuth()
  console.log(authUser)

  return (
    <Routes>
      <Route path='/' element={
        authUser ? (
          <div className='flex h-screen' >
            <Left />
            <Right />
          </div>
        ) : (
          <Navigate to={"/login"}/>
        )
      } />
      <Route path='/login'element={ authUser ? <Navigate to={'/'}/>:  <Login/>}/>
      <Route path='/signup'element={ authUser ? <Navigate to={'/'}/>:  <Signup/>}/>
  
    </Routes>
  )
}

export default App
