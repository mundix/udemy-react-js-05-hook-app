import { useState } from 'react';
 
export const useCounter = ( initialState = 10 ) => {
    
    const [state, setState] = useState(initialState);

    //se le agrego factor en 1 
    // const increment = () => {
    const increment = ( factor = 1) => {
        setState( state + factor );
    }

    const decrement = ( factor = 1 ) => {
        setState( state - factor );
    }

    const reset = () => {
        setState( initialState);
    }

    return  { 
        //voy a regresar un arreglo de objetos, en otros caso se regresa un array 
        state,
        increment,
        decrement,
        reset
    };
}
