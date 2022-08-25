import React, { useEffect, useState } from 'react'
import Footer from '../../components/Footer/Footer'
import Navigation from '../../components/Navigation/Navigation'
import mediaCategories from '../../assets/mediaCategories.json'
import placesData from '../../assets/placesData.json'
import './category.css'
import { useNavigate } from 'react-router-dom'
import queryString from 'query-string'

function Category() {
    const navigate = useNavigate();

    const { type } = queryString.parse(window.location.search);

    const [typeState, setTypeState] = useState();

    useEffect(() => {
      setTypeState(type);
    }, [type])

  return (
    <div className='category'>
        <Navigation />

        <div className="home_content">
          <div className='photography_categoryWrapper'>
            {
              typeState === 'places' ? (
                <React.Fragment>
                  {
                    placesData &&
                    placesData.map((mediaCategory, index) => (
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
                </React.Fragment>
              ) : (
                <div className='coming_soon'>
                  <img src='https://res.cloudinary.com/emacon-production/image/upload/v1661409343/undraw_moments_0y20_crurxn.png' alt='Klein Netto' />
                  <h2>{type.toUpperCase()} COMING SOON!</h2>
                </div>
              ) &&
              typeState === 'films' ? (
                <div className='films_wrapper' >
                  <div className='film'>
                    <h3>Name of the Film</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <iframe src="https://www.youtube.com/embed/4teQk3gK610" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>    
                  </div>
                </div>
              ) : (
                <div className='coming_soon'>
                  <img src='https://res.cloudinary.com/emacon-production/image/upload/v1661409343/undraw_moments_0y20_crurxn.png' alt='Klein Netto' />
                  <h2>{type.toUpperCase()} COMING SOON!</h2>
                </div>
              )
            }

            
          </div>
        </div>

        <Footer />
    </div>
  )
}

export default Category