import { useState } from 'react'
import './App.css'
import Navigation from './components/Navigation/Navigation'
import Contactheader from './components/ContactHead/Contactheader'
import Contactform from './components/ContactForm/Contactform'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navigation/>
      <Contactheader/>
      <Contactform/>
    </div>
  )
}

export default App
