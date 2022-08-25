import React from 'react'
import Footer from '../../components/Footer/Footer'
import Navigation from '../../components/Navigation/Navigation'
import './media.css'

const images = [
  "https://res.cloudinary.com/emacon-production/image/upload/v1601626977/Emacon%20Production/_MG_7971_ljafny.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1601626929/Emacon%20Production/IMG_0194_ehwqcg.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1601626946/Emacon%20Production/IMG_0732-HDR-Edit-Edit_yoyd9u.jpg",
  "https://res.cloudinary.com/emacon-production/image/upload/v1601627063/Emacon%20Production/IMG_1838_lng3qp.jpg"
]

function Media() {
  return (
    <div className='media'>
        <Navigation />

        <div className='media_content'>
            <div className='media_title'>
                <h2>TITLE</h2>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type 
                    specimen book.
                </p>
            </div>

            <div className='media_images'>
              {
                images.map((item, index) => (
                  <img src={item} key={index}/>
                ))
              }
            </div>
        </div>

        <Footer />
    </div>
  )
}

export default Media