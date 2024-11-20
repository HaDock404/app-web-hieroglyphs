import Header from '../components/Header'
import '../styles/usefull_page.css'

function LegalNotice() {
    return (
        <>
            <Header />
            <section className='section_usefull_page'>
                <h1 className='h1_usefull_page'>Legal Notice</h1>
                <h2 className='h2_usefull_page'>Website Information</h2>
                <div className='text_usefull_page'>
                    This website is operated by: <br/><br/>
                    ATLAS INTELLIGENCE<br/>
                    Address: [Your Address]<br/>
                    Contact: [Your Contact Email]<br/>
                    Phone: [Your Phone Number]<br/>
                    Website: [Your Website URL]<br/>
                </div>
                <h2 className='h2_usefull_page'>Hosting Provider</h2>
                <div className='text_usefull_page'>
                    This website is operated by: <br/><br/>
                    [Hosting Provider Name]<br/>
                    Address: [Hosting Provider Address]<br/>
                    Contact: [Hosting Provider Contact Email]<br/>
                    Website: [Hosting Provider Website URL]<br/>
                </div>
                <h2 className='h2_usefull_page'>Intellectual Property</h2>
                <div className='text_usefull_page'>
                All content, designs, text, graphics, images, and logos on this website are the property of ATLAS INTELLIGENCE unless otherwise noted. Unauthorized use, reproduction, or distribution of this material is prohibited without prior written consent.
                </div>
                <h2 className='h2_usefull_page'>Liability Disclaimer</h2>
                <div className='text_usefull_page'>
                ATLAS INTELLIGENCE strives to ensure the accuracy and timeliness of the information provided on this website. However, we do not guarantee the completeness, accuracy, or timeliness of the information and are not liable for any errors or omissions.<br/>
                This website may contain links to external websites. ATLAS INTELLIGENCE is not responsible for the content or reliability of these external sites.
                </div>
                <h2 className='h2_usefull_page'>Privacy Policy</h2>
                <div className='text_usefull_page'>
                Your privacy is important to us. Please refer to our Privacy Policy for detailed information on how we collect, use, and protect your personal data.
                </div>
                <h2 className='h2_usefull_page'>Applicable Law and Jurisdiction</h2>
                <div className='text_usefull_page'>
                These legal notices are governed by the laws of CANADA. Any disputes shall be subject to the exclusive jurisdiction of the courts of CANADA.
                </div>
            </section>
        </>
    )
}

export default LegalNotice