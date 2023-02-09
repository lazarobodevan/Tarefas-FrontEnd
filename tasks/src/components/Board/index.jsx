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
            
            cards && cards.map((elem,index) =>{
                return <Card 
                    key={elem.id}
                    id={elem.id}
                    name= {elem.name}
                    description= {elem.description}
                    status={elem.status}/>
                    })
                
            }
        </div>
    )
}

export default Board