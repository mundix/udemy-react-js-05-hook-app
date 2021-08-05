//Functional component => rfc 
import React, { useState } from 'react';
import '../../counter.css';

export const CounterApp = () => {
    
    // const [counter, setCounter] = useState(
    // const [ {counter1, counter2}, setCounter] = useState(
    const [ state, setState] = useState(
        {
            counter1: 10,
            counter2: 20,
            counter3: 30,
            counter4: 40
        }
    );

    // console.log(counter1);
    //ahora con el cambio de state y setState puedo hacer esto
    //para mantener todas las variables del desestructuracion necesitamos usar el operador spreath ""..."" para eso
    const  { counter1, counter2 } = state;
    return (
        <>
        {/* <h1>Counter {counter} times</h1> */}
        <h2>Counter1: {counter1}</h2>
        <h2>Counter2: {counter2}</h2>
        <button className='btn btn-primary' onClick={
                () =>  {
                    // setCounter(counter1 + 1) esto ya nofunciona por que el state ahora es un objeto con desestructuracion de dos variables
                    setState({
                        //como no queiro cambiar el counter 2 uso el spreath par que se mantentan todas las propiedades
                        ...state,
                        counter1: counter1 + 1
                    })
                }
            }>
          +1
        </button>
      </>
    )
}
