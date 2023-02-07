
import { useEffect, useRef, useState } from 'react';
import optionIcon from '../../assets/option.png';

import './styles.css';
function OptionsButton(){
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
                        <div>Editar</div>
                        <div>Excluir</div>
                    </div>
                )
            }
        </div>
    )
}

export default OptionsButton;