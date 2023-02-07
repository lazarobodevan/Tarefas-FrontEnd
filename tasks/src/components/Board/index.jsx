import { useState } from 'react'
import Card from '../Card'

import './styles.css'
function Board({name, cards}){

    return(
        <div className='wrapper'>
            <div className='header'>
                <strong>{name}</strong>
            </div>
            <Card 
                id={0}
                status="Pendente"
                name="Fazer TP"
                description="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"/>
        </div>
    )
}

export default Board