
import './styles.css'
import optionIcon from '../../assets/option.png'
//adicionar position
function Card({id, name, status, description}){
    return(
        <div className='card'>
            <div className='headerWrap'>
                <strong>{name}</strong>
                <div className='optionsButton'>
                    <img src={optionIcon}/>
                </div>
            </div>
        </div>
    )
}

export default Card;