import '../styles/intro_search.css'

import Icon3 from './Icon3.jsx'

function IntroSearch() {
    return (
        <section id='intro_search'>
            <article id='intro_search_part1'>
                <div id='intro_search_part1A'>
                    <div id='intro_search_part1A_el1'>Need icons for your website ? Choose from hundreds of free icons the ones that suit you.</div>
                    <div id='intro_search_part1A_el2'>Easy to use, easy to customize, make your life easier.</div>
                </div>
                <div id='intro_search_part1B'>
                    <div id='intro_search_part1B_el1'>
                        <div>Regular</div> 
                        <div>▼</div>
                    </div>
                    <input id='intro_search_part1B_el2' type="text" placeholder="Search for icons"></input>
                    <div id='intro_search_part1B_el3'>
                        <Icon3 />
                    </div>

                </div>

            </article>
            <article id='intro_search_part2'>

            </article>
        </section>
    )
}

export default IntroSearch