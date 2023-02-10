import { useEffect, useState } from 'react';
import Button from '../Button';
import Dropdown from '../Dropdown';
import './styles.css';
import {updateTask} from '../../services/api.js';
function Modal({id, name, desc, status, position, onClick, hasChanged}){

    const [taskName, setTaskName] = useState('');
    const [taskDesc, setTaskDesc] = useState('');
    const [taskStatus, setTaskStatus] = useState('');

    function setInputHeight(element, height){
        if(!element) return;

        const target = element.target ? element.target : element;
        target.style.height = height;
        target.style.height = `${target.scrollHeight+2}px`;
    }
    function setNameAndResize(event, height){
        setTaskName(event.target.value);
        setInputHeight(event, height);
    }

    function setDescAndResize(event, height){
        setTaskDesc(event.target.value);
        setInputHeight(event, height);
    }

    function actionClick(){
        updateTask(id, taskName, taskDesc, position, taskStatus).then(console.log).catch();
        onClick();
        hasChanged();
    }
    

    function initializeStates(){
        if(!taskName){
            setTaskName(name);
        }
        if(!taskDesc){
            setTaskDesc(desc);
        }

        return {
            name: taskName,
            desc: taskDesc
        }
    }

    return(
        <div className="modalWrapper">
            <div className="modalBackground"></div>
            <div className="modal">
                <textarea className="inputName" onChange={e=>setNameAndResize(e,'40px')} placeholder="Minha atividade" value={initializeStates().name}/>
                <textarea className="inputDesc" onChange={e=>setDescAndResize(e, '90px')} value={initializeStates().desc}/>
                <Dropdown item={status} newStatus={setTaskStatus}/>
                <Button name={"Salvar"} onClick={()=>actionClick()}/>
            </div>
        </div>
    )
}

export default Modal;