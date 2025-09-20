import { useState } from 'react'
import './App.css'
import { Outlet, Navigate } from 'react-router-dom'
import { useUser } from '@clerk/clerk-react'
import Header from './components/ui/custom/Header'

function App() {
  const { user, isLoaded, isSignedIn } = useUser()

  if (!isLoaded) {
    return <div>Loading...</div>
  }

  if (!isSignedIn && isLoaded) {
    return <Navigate to={"/auth/sign-in"} />
  }

  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default App
