import { useState } from 'react'
import Board from '../../components/Board'
import './styles.css'
function Home() {

  return (
    <div className='homeDiv'>
      <h1>Tarefas</h1>
      <div className='boardsWrapper'>
        <Board name={"Pendente"}/>
        <Board name={"Em andamento"}/>
        <Board name={"Concluído"}/>
      </div>
    </div>
  )
}

export default Home
