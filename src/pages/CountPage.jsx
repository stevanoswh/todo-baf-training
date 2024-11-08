import React, { useState } from 'react'
import Count from '../components/Count'

export default function CountPage() {

    const [countFromParent, setCount] = useState(0)
    // const [colorEven, setColorEven] = useState({})
    const addCountByOne = ()=> {
        setCount(countFromParent + 1)
        // setColorEven(countFromParent % 2 == 0 ?  {color:'green'} : {color:'red'})
    }
    
    return (
        <>
            <h2>CountPage</h2>
            <Count count={countFromParent}/>
            <button onClick={addCountByOne}>Tambah</button>
        </>
    )
}

