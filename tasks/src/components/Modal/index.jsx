import { useContext, useEffect, useState } from 'react';
import { HomeContext } from '../../contexts/home';
import Button from '../Button';
import Dropdown from '../Dropdown';
import './styles.css';

function Modal({id, name, desc, status, onClick}){

    const [taskName, setTaskName] = useState('');
    const [taskDesc, setTaskDesc] = useState('');
    const [taskStatus, setTaskStatus] = useState('');

    const {hasChanged} = useContext(HomeContext);

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

    function handleOnClick(id, taskName, taskDesc, taskStatus){
        onClick(id, taskName, taskDesc, taskStatus);
        hasChanged();
    }

    useEffect(()=>{
        setTaskName(name);
        setTaskDesc(desc || '');
    },[])

    return(
        <div className="modalWrapper">
            <div className="modalBackground"></div>
            <div className="modal">
                <textarea className="inputName" onChange={e=>setNameAndResize(e,'40px')} placeholder="Minha atividade" value={taskName && taskName.substring(0,44)}/>
                <textarea className="inputDesc" onChange={e=>setDescAndResize(e, '90px')} value={taskDesc && taskDesc.substring(0,449)} rows={5}/>
                <Dropdown item={status} newStatus={setTaskStatus}/>
                <Button name={"Salvar"} onClick={()=>handleOnClick(id, taskName, taskDesc, taskStatus)}/>
            </div>
        </div>
    )
}

export default Modal;