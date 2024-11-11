import '../styles/header.css'

import Icon1 from '../components/Icon1'
import Icon2 from '../components/Icon2'

function Header() {
    return (
        <header id='header'>
            <div id='part1'>
                <div id='part1_el1'>
                    <Icon1 />
                </div>
                <div id='part1_el2'>
                    <Icon2 />
                </div>
            </div>
        </header>
    )
}

export default Header