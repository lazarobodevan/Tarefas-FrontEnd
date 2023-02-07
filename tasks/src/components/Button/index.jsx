import './styles.css';
function Button({name, onClick}){
    return(
        <div className='button' onClick={onClick}>
            <span className='buttonName'>{name}</span>
        </div>
    )
}

export default Button;