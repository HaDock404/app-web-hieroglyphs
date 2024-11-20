import { Link } from 'react-router-dom'
import '../styles/usefull_link.css'

function UsefullLink() {
    return (
        <footer id="usefull_link">
            <Link className='usefull_link_style' to='/legal-notice'>Legal Notice</Link>
            <Link className='usefull_link_style' to='/terms-conditions'>Terms&Conditions</Link>
            <Link className='usefull_link_style' to='/'>Contact</Link>
        </footer>
    )
}

export default UsefullLink