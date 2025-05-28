import { useEffect, useState } from 'react';
import './App.css'
import AdminDashboard from './features/admin/components/AdminDashboard'
import LoginForm from './features/auth/components/LoginForm'
import DogList from './features/dogs/components/DogList'
import DogCreationForm from './features/dogs/components/DogCreationForm';
import DogDeleteForm from './features/dogs/components/DogDeleteForm';

function App() {
 
  const [dogs, setDogs] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showDogCreationForm, setShowDogCreationForm] = useState(false);
  const [showDogDeleteForm, setShowDogDeleteForm] = useState(false);


  const clearDogs = () => {
    setDogs([]);
  };
  return (
    <div>
    <h1>Hello World!</h1>
    <LoginForm isLoggedIn = {isLoggedIn} setIsLoggedIn = {setIsLoggedIn} />
    {isLoggedIn ? <AdminDashboard clearDogs = {clearDogs} setIsLoggedIn={setIsLoggedIn} showDogCreationForm={showDogCreationForm} setShowDogCreationForm = {setShowDogCreationForm} showDogDeleteForm={showDogDeleteForm} setShowDogDeleteForm={setShowDogDeleteForm}/> : ""}
    <hr />
    <DogList dogs = {dogs} setDogs = {setDogs}/>
    {isLoggedIn && showDogCreationForm ? < DogCreationForm  /> : ""}
    {showDogDeleteForm ? <DogDeleteForm/> : ""}
    </div>
  )
}

export default App

