import '../styles/intro.css'
import { Link } from 'react-router-dom'

function Intro() {
    return (
        <section id="section-about-intro">
            <article id="article-about-intro">
                <div className='article-about-intro'>
                    Welcome to our website, and thank you for visiting! This project was designed, developed, and is maintained by <Link id='gael_link' to='https://hadock404.github.io/app-web-me/'>Gael Delescluse</Link>. Its primary goal is to make it easy and fast for web developers to access a wide range of optimized icons, ensuring high-quality graphic rendering.
                </div>
                <div className='article-about-intro'>
                    Automation is a key component of this project: icons are drawn by computer and then transformed into JavaScript functions to create editable elements ready for online use. With a fully automated CI/CD pipeline, project management and deployment are seamless and efficient.
                </div>
            </article>
        </section>
    )
}

export default Intro