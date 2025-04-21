import { Link } from 'react-router-dom'
import Header from "./Header"

import '../styles/errorpage.css';

function ErrorPage({ statusCode, message }) {
    return (
        <div id="main-container">
            <Header />
            <div className='errorpage-placement'>
                <h1 className='error-page-h1'>Erreur {statusCode || '404'}</h1>
                <p className='error-page-p'>{message || "The page you are looking for does not exist."}</p>
                <Link to='/' className='error-back-button '>Home</Link>
            </div>
        </div>
    )
}

export default ErrorPage