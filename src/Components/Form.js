import '../estilos/styles-note.css'
import '../estilos/styles-phone.css'
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import Register from './Register'
import App from '../App'

function Form() {
    return (
        <>
            <h1 className='titulo'>BYourself!</h1>
            <br />
            <div className='container' id='card'>
                <form id='formulario'>
                    <h3>Welcome back!</h3>
                    <div className='form-group'>
                        <label htmlFor='user'>Username:</label>
                        <input type='text' className='form-control' id='user' placeholder='username...'/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='pwd'>Password:</label>
                        <input type='password' className='form-control' id='pwd' placeholder='password...' />
                    </div>
                    <div className='envio'>
                        <button type='submit' className='btn btn-default' id='boton-login'>Log In</button>
                        <Link to='/forgotten' id='forgotten'>Forgot password?</Link>
                    </div>
                    <p>Don't have an account?</p>
                    <Link to='/register'>Register!</Link>
                </form>
            </div>
        </>
    )
}

export default Form