import './styles.css';
function Button({name}){
    return(
        <div className='button'>
            <span className='buttonName'>{name}</span>
        </div>
    )
}

export default Button;