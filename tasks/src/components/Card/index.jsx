
import './styles.css'
import OptionsButton from '../OptionsButton';
import Modal from '../Modal';
import { useState } from 'react';
import { updateTask } from '../../services/api';

function Card({id, name, status, description, hasChanged}){

    const [modalVisible, setModalVisible] = useState(false);

    function handleModalVisible(){
        setModalVisible(!modalVisible);
    }
    
    function modalActionClick(id, taskName, taskDesc, taskStatus){
        updateTask(id, taskName, taskDesc, taskStatus).then(console.log).catch();
        setModalVisible(!modalVisible);
        hasChanged();
    }

    return(
        <>
            <div className='cardModalWrapper'>
                <div className='card'>
                    <div className='headerWrap'>
                        
                        <strong>{name.substring(0,25)}{name.length > 25 ? "...":""}</strong>
                        
                        <OptionsButton 
                            hasChanged={hasChanged} 
                            id={id}
                            showModal={handleModalVisible}
                        />
                        
                    </div>
                    
                    <div className='description' onClick={handleModalVisible}>
                        {description && description.substring(0,50)}{description && description.length > 50 ? "...":""}
                    </div>
                </div>
                {
                    modalVisible && <Modal 
                                        id={id}       
                                        name={name} 
                                        desc={description} 
                                        status={status}
                                        onClick={modalActionClick}
                                    />

                }
            </div>
        </>
    )
}

export default Card;