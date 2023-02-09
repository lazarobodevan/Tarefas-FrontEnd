import { useEffect, useState } from 'react'
import Card from '../Card'

import './styles.css'
function Board({name, cards}){

    return(
        <div className='wrapper'>
            <div className='header'>
                <strong>{name}</strong>
            </div>
            {
            
            cards.map((elem,index) =>{
                return <Card 
                    key={index}
                    id={index}
                    name= {elem.name}
                    description= {elem.description}
                    status={elem.status}/>
                    })
                
            }
        </div>
    )
}

export default Board