
import { useEffect, useRef, useState } from 'react';
import optionIcon from '../../assets/option.png';
import { deleteTask } from '../../services/api';

import './styles.css';
function OptionsButton({hasChanged, id, showModal}){
    const [isVisible, setVisible] = useState(false);
    const optionRef = useRef();

    const handleClickOutside = event =>{
        if(optionRef.current && !optionRef.current.contains(event.target)){
            setVisible(false);
        }
    }

    const handleClick = () => {
        setVisible(!isVisible);
    }

    const onClickDelete = () =>{
        deleteTask(id).then(()=> hasChanged());
    }

    useEffect(()=>{
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    },[isVisible]);

    return(
        <div ref={optionRef} className='wrapperOptions'>
            <div className='optionsButton' onClick={handleClick}>
                <img src={optionIcon}/>
            </div>
            {
                isVisible && (
                    <div className='optionsPopup'>
                        <div onClick={()=>showModal()}>Editar</div>
                        <div onClick={onClickDelete}>Excluir</div>
                    </div>
                )
            }
        </div>
    )
}

export default OptionsButton;