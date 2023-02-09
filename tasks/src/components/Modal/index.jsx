import { useEffect, useState } from 'react';
import Button from '../Button';
import Dropdown from '../Dropdown';
import './styles.css';
function Modal({id, name, desc, status, onClick}){

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

    function actionClick(name, desc){
        console.log(name);
        const body = {
            name: taskName,
            description: taskDesc,
            position: 10,
            status: taskStatus.toUpperCase()
        };

        const options = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(body)
        }

        console.log(options);
        fetch(`http://localhost:8080/tasks/${id}`, options).then(t => t.json()).then(console.log).catch();
        onClick();
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
                <Button name={"Salvar"} onClick={()=>actionClick(taskName, taskDesc)}/>
            </div>
        </div>
    )
}

export default Modal;