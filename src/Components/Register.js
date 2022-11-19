import React from 'react'
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'

function Register() {
    return (
        <>
            <h1 className='titulo' id='titulo-reg'>BYourself!</h1>
            <div className='container' id='card-reg'>
                <form id='form-register'>
                    <h3>Join the community!</h3>
                    <div className='form-group'>
                        <label htmlFor='mail'>Email:</label>
                        <input type='email' className='form-control' id='mail' placeholder='E-mail...' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='user'>Create a username:</label>
                        <input type='text' className='form-control' id='user' placeholder='new username...' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='pwd'>Create a password:</label>
                        <input type='password' className='form-control' id='pwd' placeholder='new password...' />
                    </div>
                    <button type='submit' className='btn btn-default' id='boton-register'>Register</button>
                    <p>Already have an account?</p>
                    <Link to='/login' id='a-login'>Log in!</Link>
                </form>
            </div>
        </>
    )
}

export default Register