import './styles.css';
import dropdownIcon from '../../assets/arrow-down-sign-to-navigate.png';
import { useEffect, useState } from 'react';

function Dropdown({item, newStatus}){

    const [selected, setSelected] = useState(item);
    const [isActive, setIsActive] = useState(false);

    function handleSelected(key){
        setSelected(key);
        handleIsActive();
    }
    function handleIsActive(){
        setIsActive(!isActive);
    }

    useEffect(()=>{
        newStatus(selected);
        console.log(selected);
    },[selected]);
    return(
        <div className="container">
            <div className="menuContainer">
                <button className={`menuButton ${selected ? "itemSelected": ""}`} onClick={handleIsActive}>
                    {selected ? selected: "Selecione..."}
                    <img src={dropdownIcon} width={'10px'}/>
                </button>

                <nav className={`menu ${isActive ? "active":"inactive"}`}>
                    <ul>
                        <li onClick={() => handleSelected("Pendente")}><div className='option'><span>Pendente</span></div></li>
                        <li onClick={() => handleSelected("Em andamento")}><div className='option'><span>Em andamento</span></div></li>
                        <li onClick={() => handleSelected("Concluido")}><div className='option'><span>Concluído</span></div></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Dropdown;