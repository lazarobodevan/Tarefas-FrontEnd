
import './styles.css'
import OptionsButton from '../OptionsButton';
import Modal from '../Modal';
//adicionar position
function Card({id, name, status, description}){

    return(
        <>
            <div className='card'>
                <div className='headerWrap'>
                    
                    <strong>{name}</strong>
                    
                    <OptionsButton/>
                    
                </div>
                
                <span className='description'>{description.substring(0,50)}...</span>
            </div>
        </>
    )
}

export default Card;