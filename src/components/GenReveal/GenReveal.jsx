import React from 'react'

import './GenReveal.css';

import Button from '../Button/Button'

const GenTable = ({ name, generationResult, generationData, resetResult }) => {
    return (
        <>
            <p className='result'>
                A geração de {name} é a: {generationResult}!
            </p>

            <Button text="Voltar" action={resetResult}/>
        </>
    )
}

export default GenTable