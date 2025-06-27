import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import GenForm from './components/GenForm/GenForm'
import GenTable from './components/GenReveal/GenReveal'

import generationData from './data/generation-data'

function App() {

  const [generationResult, setGenerationResult] = useState('');
  const [name, setName] = useState('');
  const [birthYear, setBirthYear] = useState('');
  const [validationMessage, setValidationMessage] = useState('');

  const handleName = (ev) => {
    setName(ev.target.value);
  }

  const validDigits = (text) => {
    return  text.replace(/\D+/g, "");
}

  const handleBirthYear = (ev) => {
    setBirthYear(validDigits(ev.target.value));
  }

  const clearForm = (ev) => {
    ev.preventDefault();
    setName('');
    setBirthYear('');
  }

  const calcGen = (ev) => {
    ev.preventDefault();

    for (let generation of generationData) {

      if (birthYear >= generation.min && birthYear <= generation.max) {
        setGenerationResult(generation.label);
        return;
      }
    }

    if (!generationResult) {
      setValidationMessage('Geração não encontrada, insira uma ano partir de 1901!');
    }
  }

  const resetResult = (ev) => {
    ev.preventDefault();

    setName('');
    setBirthYear('');
    setGenerationResult('');
    setValidationMessage('');
  }

  return (
    <div className='container'>
      <h1>
        Descubra a geração de alguém
      </h1>

      <div className='content'>

        {!generationResult ? (
          <GenForm name={name} birthYear={birthYear} validationMessage={validationMessage}
            handleName={handleName} handleBirthYear={handleBirthYear} calcGen={calcGen} clearForm={clearForm} />
        ) : (
          <GenTable name={name} generationResult={generationResult} generationData={generationData} resetResult={resetResult} />
        )
        }
      </div>
    </div>
  )
}

export default App
