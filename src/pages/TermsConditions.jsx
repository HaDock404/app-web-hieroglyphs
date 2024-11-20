import Header from '../components/Header'
import '../styles/usefull_page.css'

function TermsConditions() {
    return (
        <>
            <Header />
            <section className='section_usefull_page'>
                <h1 className='h1_usefull_page'>Terms and Conditions of Use</h1>
                <h2 className='h2_usefull_page'>Introduction</h2>
                <div className='text_usefull_page'>
                    Welcome to hieroglyphs.io. By accessing and using this website, you agree to comply with and be bound by these Terms and Conditions. If you do not agree with any part of these terms, you are prohibited from using this website.
                </div>
                <h2 className='h2_usefull_page'>1. Use of the Website</h2>
                <div className='text_usefull_page'>
                1.1. You must use this website for lawful purposes only and in accordance with these Terms and Conditions. <br/>
                1.2. You agree not to use this website to:<br/>
                - Violate any applicable laws or regulations.<br/>
                - Transmit or upload any harmful material, including viruses or malware.<br/>
                - Engage in any activity that interferes with or disrupts the website's functionality.<br/>
                </div>
                <h2 className='h2_usefull_page'>2. Intellectual Property</h2>
                <div className='text_usefull_page'>
                2.1. All content, including text, images, logos, and designs, is the property of ATLAS INTELLIGENCE or its licensors, unless otherwise stated. <br/>
                2.2. Unauthorized use, reproduction, or distribution of the content is strictly prohibited without prior written permission from ATLAS INTELLIGENCE.
                </div>
                <h2 className='h2_usefull_page'>3. Limitation of Liability</h2>
                <div className='text_usefull_page'>
                3.1. This website is provided "as is," without warranties of any kind. <br/>
                3.2. ATLAS INTELLIGENCE is not liable for: <br/>
                - Any direct, indirect, or consequential damages arising from the use or inability to use the website. <br/>
                - The content of external links provided on this website.
                </div>
                <h2 className='h2_usefull_page'>4. Privacy</h2>
                <div className='text_usefull_page'>
                Your use of the website is subject to our Privacy Policy, which outlines how we collect, use, and protect your personal data.
                </div>
                <h2 className='h2_usefull_page'>5. Modifications to the Terms</h2>
                <div className='text_usefull_page'>
                ATLAS INTELLIGENCE reserves the right to modify these Terms and Conditions at any time. Changes will be effective upon posting. Continued use of the website constitutes acceptance of the updated terms.
                </div>
                <h2 className='h2_usefull_page'>6. Governing Law and Jurisdiction</h2>
                <div className='text_usefull_page'>
                These Terms and Conditions are governed by the laws of CANADA. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of CANADA.
                </div>
            </section>
        </>
    )
}

export default TermsConditions