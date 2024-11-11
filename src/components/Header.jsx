import '../styles/header.css'

import Icon1 from '../components/Icon1'

function Header() {
    return (
        <header id='header'>
            <div id='part1'>
                <div id='part1_el1'>
                    <Icon1 />
                </div>
                <div id='part1_el2'></div>
            </div>
        </header>
    )
}

export default Header