import React, { useState } from 'react'

import './GenForm.css'

import Button from '../Button/Button';

const GenForm = () => {

  const [name, setName] = useState('');
  const [birthYear, setBirthYear] = useState('');

  const handleName = (ev) => {
    setName(ev.target.value);
  }

  const handleBirthYear = (ev) => {
    setBirthYear(ev.target.value);
  }

  const clearForm = (ev) => {
    ev.preventDefault();
    setName('');
    setBirthYear('');
  }

  return (
    <form>
      <input type="text" placeholder='Nome' onChange={handleName} value={name} />
      <input type="number" min="1901" placeholder='Ano de nascimento' onChange={handleBirthYear} value={birthYear} />

      <div className="button-wrapper">
        <Button text="Verificar" />
        <Button text="Limpar" action={clearForm} />
      </div>
    </form>
  )
}

export default GenForm