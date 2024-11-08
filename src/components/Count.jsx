import React, { useState } from 'react'

function Count({count}) {
   
    const colorEven = count % 2 == 0 ?  {color:'green'} : {color:'red'};

    
    return (
        <div>
            <h2 style={colorEven}>{count}</h2>
        </div>
    )
}

export default Count