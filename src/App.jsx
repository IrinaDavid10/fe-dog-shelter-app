import { useEffect, useState } from 'react';
import './App.css'
import AdminDashboard from './features/admin/components/AdminDashboard'
import LoginForm from './features/auth/components/LoginForm'
import DogList from './features/dogs/components/DogList'
import DogCreationForm from './features/dogs/components/DogCreationForm';

function App() {
 
  const [dogs, setDogs] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const clearDogs = () => {
    setDogs([]);
  };
  return (
    <div>
    <h1>Hello World!</h1>
    <LoginForm isLoggedIn = {isLoggedIn} setIsLoggedIn = {setIsLoggedIn} />
    {isLoggedIn ? <AdminDashboard clearDogs = {clearDogs} setIsLoggedIn={setIsLoggedIn}/> : ""}
    <hr />
    <DogList dogs = {dogs} setDogs = {setDogs}/>
    {isLoggedIn ? < DogCreationForm/> : ""}
    </div>
  )
}

export default App

