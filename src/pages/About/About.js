import React from 'react'
import Footer from '../../components/Footer/Footer'
import Navigation from '../../components/Navigation/Navigation'
import './about.css'

function About() {
  return (
    <div className='about'>
        <Navigation />

        <div className='about_content'>
            <div className='about_bioWrapper'>
                <div className='about_img'>
                    <img src='https://res.cloudinary.com/emacon-production/image/upload/v1601626928/Emacon%20Production/IMG_0296_pnxemx.jpg' alt='Klein Nettoh' />
                </div>
                <div className='about_bio'>
                    <p>
                        Hi am klein,  An independent filmmaker/photographer based in Nairobi, Kenya. <br />
                        <br />
                        My area of specialty is in documentary photography, travel, lifestyle content ,places ,wildlife and people driven narratives like portraiture among others <br />
                        <br />
                        I am also very skilled and passionate in telling stories through video and short cinematic films because I believe in Africans telling their own stories because nobody can do it better than we can, I  am what you can call Hybrid, I do video and stills. <br />
                        <br />
                        Some of the brands I have worked and partnered with include :
                    </p>
                </div>
            </div>
        </div>

        <Footer />
    </div>
  )
}

export default About