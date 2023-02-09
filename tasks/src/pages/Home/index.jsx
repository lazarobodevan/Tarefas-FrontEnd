import { useEffect, useState } from 'react'
import Board from '../../components/Board'
import './styles.css'
function Home() {
  
    const pending = [{name:"Tarefa", description:"Descrição da tarefa", status:"Pendente"}, {name:"Tarefa2", description:"Descrição da tarefaaaaa aaaaa aaaaaa aaaaaaa aaaaaaaaaaaaaa2"},{name:"Tarefa2", description:"Descrição da tarefa2"},{name:"Tarefa2", description:"Descrição da tarefa2"}, {name:"Tarefa2", description:"Descrição da tarefa2"}, ];
    const running = [{name:"TarefaR", description:"Descrição da tarefaR"}, {name:"Tarefa2R", description:"Descrição da tarefa2R"}];
    const concluded = []

  return (
    <div className='homeDiv'>
      <h1>Tarefas</h1>
      <div className='boardsWrapper'>
        <Board name={"Pendente"} cards={pending}/>
        <Board name={"Em andamento"} cards={running}/>
        <Board name={"Concluído"} cards={concluded}/>
      </div>
    </div>
  )
}

export default Home
