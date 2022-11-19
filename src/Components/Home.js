import React from 'react'
import {Link, HashRouter} from 'react-router-dom'

function Home() {
    return (
        <div className='container-fluid' id='home'>
            <header>
                <nav className='nav navbar-nav'>
                    <h1 className='titulo' id='titulo-home'>BYourself!</h1>
                    <ul>
                        <li><Link to='/login' id='iniciar-sesion'>Sign in</Link></li>
                        <li><Link to='/register' id='registrarse'>Sign up</Link></li>
                    </ul>
                </nav>
            </header>
            <br />
            <main>
                <div className='imgs'>
                    <img src='/imgs/BYphone.png' id='img1'/>
                    <img src='/imgs/BYnote.png' id='img2'/>
                </div>
                <div className='descrip'>
                    <h2>What is <span>BYourself</span>?</h2>
                    <p>
                        BYourself is an app to connect and chat with someone around the world.
                        You will have to post a photo with a simple "quote" cheering people up
                        or describing what were you doing at the moment you took that photo.
                    </p>
                    <footer>
                        <h2>Follow us here</h2>
                        <div className='media'>
                            <a href='https://www.instagram.com/joacocarena/' target='_blank'><i class="fa-brands fa-instagram"></i></a>
                            <a href='https://github.com/joacocarena' target='_blank'><i class="fa-brands fa-github"></i></a>
                            <a href='https://www.linkedin.com/in/joaquincarena/' target='_blank'><i class="fa-brands fa-linkedin-in"></i></a>
                        </div>
                    </footer>
                </div>
            </main>
        </div>
    )
}

export default Home