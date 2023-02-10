
import './styles.css'
import OptionsButton from '../OptionsButton';
import Modal from '../Modal';
import { useState } from 'react';
//adicionar position
function Card({id, name, status, description, hasChanged}){

    const [modalVisible, setModalVisible] = useState(false);

    function handleModalVisible(){
        setModalVisible(!modalVisible);
    }

    return(
        <>
            <div className='cardModalWrapper'>
                <div className='card'>
                    <div className='headerWrap'>
                        
                        <strong>{name}</strong>
                        
                        <OptionsButton 
                            hasChanged={hasChanged} 
                            id={id}
                            showModal={handleModalVisible}
                        />
                        
                    </div>
                    
                    <div className='description' onClick={handleModalVisible}>{description.substring(0,50)}{description.length > 50 ? "...":""}</div>
                </div>
                {
                    modalVisible && <Modal 
                                        id={id}       
                                        name={name} 
                                        desc={description} 
                                        status={status}
                                        onClick={handleModalVisible}
                                        hasChanged={hasChanged}/>

                }
            </div>
        </>
    )
}

export default Card;