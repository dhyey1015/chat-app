
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { SignIn } from './components/SignIn'
import { SignUp } from './components/SignUp'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignIn/>} />
      </Routes>
      <Routes>
        <Route path='/signup' element={<SignUp/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
