import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import GenForm from './components/GenForm/GenForm'

function App() {

  return (
    <div className='container'>
        <h1>
          Descubra a geração de alguém
        </h1>

        <GenForm />

        
    </div>
  )
}

export default App
