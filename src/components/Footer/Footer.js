import React from 'react'
import './footer.css'

const socialMediaDetails = [
  {
    icon: "bx bxl-instagram-alt",
    targetLink: "https://www.instagram.com/klein_nettoh/"
  },
  {
    icon: "bx bxl-youtube",
    targetLink: "https://www.youtube.com/channel/UCwIF3S_3rdaa9C-wp5QWOow"
  }
]

function Footer() {
  return (
    <div className='footer'>
      <div className='copyright'>
        <p className="copyright_details">
            {`Copyright © ${new Date().getFullYear()} Klein Nettoh. `}
            {`Proudly created by `}
            <a color="inherit" href="https://victor-githui.netlify.app/" target="_blank" rel="noreferrer">
                Victor Githui
            </a>{' '}
            
        </p>
      </div>

      <div className='socialmedia_wrapper'>
        {
          socialMediaDetails.map((socialMedia, index) => (
            <a href={socialMedia.targetLink} target="_blank" key={index}>
              <i className={socialMedia.icon}></i>
            </a>
            
          ))
        }
        
      </div>
    </div>
  )
}

export default Footer