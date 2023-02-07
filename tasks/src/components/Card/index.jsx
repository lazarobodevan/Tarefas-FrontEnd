
import './styles.css'
import optionIcon from '../../assets/option.png'
import { useEffect, useRef, useState } from 'react';
//adicionar position
function Card({id, name, status, description}){

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
    },[isVisible])
    return(
        <div className='card'>
            <div className='headerWrap'>
                
                <strong>{name}</strong>
                
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
                
            </div>
            
            <span className='description'>{description.substring(0,50)}...</span>
        </div>
    )
}

export default Card;