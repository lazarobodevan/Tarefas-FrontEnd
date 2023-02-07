import { useEffect, useState } from 'react';
import Button from '../Button';
import './styles.css';
function Modal({name, desc, onClose}){

    const [taskName, setTaskName] = useState('');
    const [taskDesc, setTaskDesc] = useState();

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

    return(
        <div className="modalWrapper">
            <div className="modalBackground"></div>
            <div className="modal">
                <textarea className="inputName" onChange={ e=> setNameAndResize(e,'40px')} placeholder="Minha atividade" value={name}/>
                <textarea className="inputDesc" onChange={ e=> setDescAndResize(e,'90px')} value={desc}/>
                <Button name={"Salvar"} onClick={onClose}/>
            </div>
        </div>
    )
}

export default Modal;