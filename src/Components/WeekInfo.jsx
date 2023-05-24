import React, { useEffect, useState } from 'react'
import { useContextProvider } from '../Context/Context';
import Card from './Card';

export default function WeekInfo() {
    const { state: { daily }, dispatch } = useContextProvider();
    const [selectedCard,setSelectedCard] = useState(0)
    const updateCurrent=()=>{
        return (
            dispatch({
                type:'SET_CURRENT',payload:daily[selectedCard]
            })
        )
    }
    useEffect(()=>{
       updateCurrent();
       // eslint-disable-next-line
    },[daily,selectedCard])
    return (
        <div className="card">
            <ul className="cardList">
                {
                    daily && daily.length > 0 ? 
                    daily.map((item,index)=>{
                        return <Card key={index} item={item} className={index===selectedCard ? 'active' : ''} onClick={()=>{
                            setSelectedCard(index);
                            updateCurrent();
                        }}/>
                    }) : ''
                }
            </ul>
        </div>
    )
}


