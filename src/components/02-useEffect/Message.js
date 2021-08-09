import React, { useEffect, useState } from 'react'

export const Message = () => {

    //implementamos un useState
    const [coords, setCoords] = useState({x:0, y:0});
    const {x,y} = coords;

    //Esto consume memoria de manera incontrolable.
    useEffect(( )=>{
        // console.log('componete montado');
        // return () =>{
        //     console.log('componete desmontado');
        // }
        //se crea una referencia 'mouseMove' como constante , para pasar al eventListener
        const mouseMove = (e) => {
            const coords = {x:e.x, y:e.y};
            // console.log(coords);
            setCoords(coords);
            // console.log(':D');
        };

        window.addEventListener('mousemove', mouseMove);
        // window.addEventListener('mousemove', (e) => {
        //     // console.log(e);
        //     // const coors = {x:e.x, y:e.y};
        //     // console.log(coors);
        //     console.log(':D');
        // });
        //dismounted
        return () => {
            window.removeEventListener('mousemove', mouseMove);
        }
    }, []);


    //Qiiero extraer las coordanad de la pantalla 


    return (
        <div>
            <h1>Eres Genial</h1>
            <p>
                x: {x} y: {y}
            </p>
        </div>
    )
}
