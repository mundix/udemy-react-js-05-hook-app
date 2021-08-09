import React from 'react';
//vamos a utilzar el custom hook aqui
import { useCounter } from '../../hooks/useCounter';

import './counter.css';

export const CounterWithCustomHook = () => {

    //recibe un initialState = 10 por eso no le pngo valor en el () 
    const { state, increment, decrement, reset} = useCounter(100);

    return (
        <>
            {/* <h1>Counter With Hook: { 0 } </h1> */}
            <h1>Counter With Hook: { state } </h1>
            <hr/>
            {/* Para arregla enviardele argumenteo se tiene que mandar como una function anonima con el argumento */}
            {/* <button onClick= { increment} className='btn'> + 1 </button> */}
            {/* <button onClick= { decrement} className='btn'> - 1 </button> */}
            <button onClick= {() => { increment(2) }} className='btn btn-primary'> + 1 </button>
            <button onClick= { reset } className='btn btn-warning'> Reset </button>
            <button onClick= {() => { decrement(3) }} className='btn btn-danger'> - 1 </button>
        </>
    )
}
