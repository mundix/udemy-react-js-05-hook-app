import React , { useEffect, useState }from 'react';
import './effects.css';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState;

    useEffect( () => {
        console.log('hey!');
    },[] );

    //solo cuando el formState Cambia
    useEffect( () => {
        console.log('formState Cambio!');
    },[formState] );

    //solo cuando el email cambia
    useEffect( () => {
        console.log('el Email Cambio!');
    },[email] );

    // const handleInputChange = (e) => {
    const handleInputChange = ({target}) => {

        // console.log(e.target.name);
        // console.log(e.target.value);
        setFormState({
            ...formState,
            [target.name]:target.value
        });
    };

    return (
        <>
            <h1>useEffect</h1>
            <hr/>
            <div className='form-group'>
                <input 
                    type="text" 
                    name='name' 
                    className='form-control' 
                    placeholder='Tu nombre' 
                    value={name}
                    onChange={handleInputChange}
                />
            </div>
            <div className='form-group'>
                <input 
                    type="text" 
                    name='email' 
                    className='form-control' 
                    placeholder='johndoe@example.com' 
                    value={email}
                    onChange={handleInputChange}
                />
            </div>
        </>
    )
}
