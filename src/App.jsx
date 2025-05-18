import { useState } from 'react';
import './App.css'
import AdminDashboard from './features/admin/components/AdminDashboard'
import LoginForm from './features/auth/components/LoginForm'
import DogList from './features/dogs/components/DogList'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
    <h1>Hello World!</h1>
    <LoginForm a={isLoggedIn} b={setIsLoggedIn} />
    {isLoggedIn ?   <AdminDashboard /> : ""}
  
    <hr />
    <DogList />
    </div>
  )
}

export default App
