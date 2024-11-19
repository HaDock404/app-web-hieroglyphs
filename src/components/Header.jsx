import '../styles/header.css'
import { Link } from 'react-router-dom'

import Icon1 from '../components/Icon1'
import Icon2 from '../components/Icon2'

function Header() {
    return (
        <header id='header'>
            <div id='part1'>
                <Link to="/" id='part1_el1'>
                    <Icon1 />
                </Link>
                <Link to="/" id='part1_el2'>
                    <Icon2 />
                </Link>
            </div>
            <Link to="/about" id='part2'>About us</Link>
        </header>
    )
}

export default Header