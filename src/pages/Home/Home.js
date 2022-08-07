import React from 'react'
import Navigation from '../../components/Navigation/Navigation'
import mediaCategories from '../../assets/mediaCategories.json'
import './home.css'
import Footer from '../../components/Footer/Footer'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate();

  return (
    <div  className="home">
        <Navigation />

        <div className="home_content">
          <div className='photography_categoryWrapper'>
            {
              mediaCategories &&
              mediaCategories.map((mediaCategory, index) => (
                <div 
                  className={`photography_category ${mediaCategory.css_background}`} 
                  key={index}
                  onClick={() => navigate(mediaCategory.target)}
                >
                  <div className='categoryDetails_Wrapper' />
                  <div className='category_details'>
                    <h2>{mediaCategory.category}</h2>
                  </div>
                </div>
              ))
            }
          </div>
        </div>

        <Footer />
    </div>
  )
}

export default Home