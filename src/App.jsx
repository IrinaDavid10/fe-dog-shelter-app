import './App.css'
import AuthContainer from './features/auth/components/AuthContainer'
import DogList from './features/dogs/components/DogList'

function App() {

  return (
    <div>
    <h1>Hello World!</h1>
    <AuthContainer />
    <hr />
    <DogList />
    </div>
  )
}

export default App
