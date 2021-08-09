import React, { useEffect } from 'react'

export const Message = () => {

    //Esto consume memoria de manera incontrolable.
    useEffect(( )=>{
        console.log('componete montado');
        return () =>{
            console.log('componete desmontado');
        }
    }, []);

    return (
        <div>
            <h1>Eres Genial</h1>
        </div>
    )
}
