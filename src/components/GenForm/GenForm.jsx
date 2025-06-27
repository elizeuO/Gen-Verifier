import React, { useState } from 'react'

import './GenForm.css'

import Button from '../Button/Button';

const GenForm = ({name, birthYear, validationMessage, handleName, handleBirthYear
  , calcGen, clearForm}) => {

    return (
    <form onSubmit={calcGen}>
      <input type="text" placeholder='Nome' onChange={handleName} value={name} />
      <input type="text" placeholder='Ano de nascimento' onChange={handleBirthYear} value={birthYear} />

      {validationMessage && (
        <div className='error-message'>
          {validationMessage}
        </div>
      )}

      <div className="button-wrapper">
        <Button text="Verificar" action={calcGen}/>
        <Button text="Limpar" action={clearForm} />
      </div>
    </form>
  )
}

export default GenForm