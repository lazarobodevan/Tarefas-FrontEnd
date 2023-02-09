import { useEffect, useState } from 'react'
import Board from '../../components/Board'
import './styles.css'
function Home() {
  
    // const pending = [{name:"Tarefa", description:"Descrição da tarefa", status:"Pendente"}, {name:"Tarefa2", description:"Descrição da tarefaaaaa aaaaa aaaaaa aaaaaaa aaaaaaaaaaaaaa2"},{name:"Tarefa2", description:"Descrição da tarefa2"},{name:"Tarefa2", description:"Descrição da tarefa2"}, {name:"Tarefa2", description:"Descrição da tarefa2"}, ];
    // const running = [{name:"TarefaR", description:"Descrição da tarefaR"}, {name:"Tarefa2R", description:"Descrição da tarefa2R"}];
    // const concluded = [];

    const [isCardChanged, setIsCardChanged] = useState(false);
    const [cards, setCards] = useState({});

    function rearrangeCards(body){
      const board = {
        pending: [],
        running: [],
        concluded: []
      };

      body.map((elem, index) =>{
        if(elem.status === "PENDENTE"){
          board.pending.push(elem);
        }else if(elem.status === "EM ANDAMENTO"){
          board.running.push(elem);
        }else if(elem.status === "CONCLUIDO"){
          board.concluded.push(elem);
        }
      });
      setCards(board);
    }

    useEffect(()=>{
      fetch('http://localhost:8080/tasks').then(t => t.json()).then(rearrangeCards).catch(console.log(cards));
    },[isCardChanged]);

    console.log(cards);

    return (
      <div className='homeDiv'>
        <h1>Tarefas</h1>
        <div className='boardsWrapper'>
          <Board name={"Pendente"} cards={cards.pending}/>
          <Board name={"Em andamento"} cards={cards.running}/>
          <Board name={"Concluído"} cards={cards.concluded}/>
        </div>
      </div>
    )
}

export default Home
