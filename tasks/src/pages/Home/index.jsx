import { useEffect, useState } from 'react'
import Board from '../../components/Board'
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import {createTask, getTasks} from '../../services/api.js';
import './styles.css'
function Home() {
  
    const [isCardChanged, setIsCardChanged] = useState(false);
    const [cards, setCards] = useState({});
    const [isModalVisible, setIsModalVisible] = useState(false);

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
      setIsCardChanged(true);
    }

    function handleCardsChanged(){
      setIsCardChanged(!isCardChanged);
    }
    function handleModalVisible(){
      setIsModalVisible(!isModalVisible);
    }

    function modalOnClick(taskName, taskDesc, taskPosition){
      handleModalVisible();
      createTask(taskName, taskDesc, -7);
      handleCardsChanged();
    }

    useEffect(()=>{
      getTasks().then(rearrangeCards).catch(console.log);
      setIsCardChanged(true);
      setIsCardChanged(false);
      console.log(isCardChanged);
    },[isCardChanged]);

    return (
      <div className='homeDiv'>
        <h1>Tarefas</h1>
        <div className='boardsWrapper'>
          <Board name={"Pendente"} cards={cards.pending} hasChanged={handleCardsChanged}/>
          <Board name={"Em andamento"} cards={cards.running} hasChanged={handleCardsChanged}/>
          <Board name={"Concluído"} cards={cards.concluded} hasChanged={handleCardsChanged}/>
        </div>
        <div className='modalButton'>
          <Button name={"+"} onClick={handleModalVisible}/>
        </div>
        {
          isModalVisible && <Modal onClick={()=>{}}/>
        }
      </div>
    )
}

export default Home
