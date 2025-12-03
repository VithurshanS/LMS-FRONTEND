import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Register from './pages/Register'
import Login from './pages/Login'
import { useAuth } from 'react-oidc-context'

function App() {
  const [count, setCount] = useState(0)
  const auth = useAuth();
  useEffect(() => {
      if (auth.isAuthenticated) {
          console.log("User logged in:", auth.user);
      }
  }, [auth.isAuthenticated, auth.user]);

  return (
    <>
      <Register />
      <Login />
    </>
  )
}

export default App
