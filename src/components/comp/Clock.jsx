import React, { useEffect, useState } from 'react';
function Clock() {
    const [date,setDate ]=useState(new Date()) 
    useEffect(()=>{
        const timerID = setInterval(() => tick(), 1000);
        return () => {
          clearInterval(timerID);
        };
    }
        ,[])
    const tick=()=>{
        setDate(new Date())
    }
    return ( 
        <h1 id='header_time'> 
{` ${('0' + date.getDate()).slice(-2)}/${('0' + (date.getMonth()+1)).slice(-2)}/${date.getFullYear()}      ${('0' + date.getHours()).slice(-2)}:${('0' + date.getMinutes()).slice(-2)}:${('0' + date.getSeconds()).slice(-2)}`}
</h1>
     );
}
export default Clock;