
import './styles.css'
import OptionsButton from '../OptionsButton';
import Modal from '../Modal';
import { useState } from 'react';
//adicionar position
function Card({id, name, status, description}){

    const [modalVisible, setModalVisible] = useState(false);

    function handleModalVisible(visibility){
        setModalVisible(!modalVisible);
    }

    return(
        <>
            <div className='cardModalWrapper'>
                <div className='card' onClick={handleModalVisible}>
                    <div className='headerWrap'>
                        
                        <strong>{name}</strong>
                        
                        <OptionsButton/>
                        
                    </div>
                    
                    <span className='description'>{description.substring(0,50)}{description.length > 50 ? "...":""}</span>
                </div>
                {
                    modalVisible && <Modal name={name} desc={description} onClose={handleModalVisible}/>

                }
            </div>
        </>
    )
}

export default Card;