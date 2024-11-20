import '../styles/intro.css'
import { Link } from 'react-router-dom'

function Intro() {
    return (
        <section id="section-about-intro">
            <article id="article-about-intro">
                <div className='article-about-intro'>
                    Welcome to our website, and thank you for visiting!<br /> Hieroglyphs.io is a passion project designed, developed, and maintained by <Link id='gael_link' to='https://hadock404.github.io/app-web-me/' target="_blank">Gael Delescluse</Link>. Its primary goal is to make it easy and fast for web developers to access a wide range of optimized icons, ensuring high-quality graphic rendering. Hieroglyphs.io is free and open-source, licensed under <Link id='MIT_link' to="https://opensource.org/license/mit" target="_blank">MIT</Link>.
                </div>
                <div className='article-about-intro'>
                    Automation is a key component of this project. With a fully automated CI/CD pipeline, project management and deployment are seamless and efficient.
                </div>
            </article>
        </section>
    )
}

export default Intro