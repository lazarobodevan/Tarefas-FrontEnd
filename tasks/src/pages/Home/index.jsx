import { useEffect, useState } from 'react'
import Board from '../../components/Board'
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import {createTask, getTasks} from '../../services/api.js';
import { HomeContext } from '../../contexts/home';
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

    function modalOnClick(id, taskName, taskDesc, taskStatus){
      handleModalVisible();
      createTask(taskName, taskDesc, cards.pending.length);
      handleCardsChanged();
    }


    useEffect(()=>{
      getTasks().then(rearrangeCards).catch(console.log);
    },[isCardChanged]);

    return (
      <div className='homeDiv'>
        <HomeContext.Provider value={{hasChanged: handleCardsChanged}}>
          <h1>Tarefas</h1>
          <div className='boardsWrapper'>
            
            <Board name={"Pendente"} cards={cards.pending} />
            <Board name={"Em andamento"} cards={cards.running} />
            <Board name={"Concluído"} cards={cards.concluded} />
            
          </div>
          <div className='modalButton'>
            <Button name={"+"} onClick={handleModalVisible}/>
          </div>
          {
            isModalVisible && <Modal onClick={modalOnClick}/>
          }
        </HomeContext.Provider>
      </div>
    )
}

export default Home
