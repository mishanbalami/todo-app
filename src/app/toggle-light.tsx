import {  useState } from 'react'

import Button from '../components/button'

export default function ToggleLight(){
    const [isTurnedOn,setTurnedOn] = useState(false)
    const  handelToggle =()=>{
        setTurnedOn(!isTurnedOn)

    }
    return(
        <div>
            <Button title="Toggle" onClick={handelToggle}/>
            <div className={`w-[40px] h-[40px] rounded-full ${isTurnedOn ? 'bg-green-500':'bg-red-500'}`}></div>
        </div>
    )
}