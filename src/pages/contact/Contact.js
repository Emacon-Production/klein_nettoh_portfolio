import React from 'react'
import Footer from '../../components/Footer/Footer'
import Navigation from '../../components/Navigation/Navigation'
import './contact.css'
import MediaCategories from '../../assets/mediaCategories.json'
import { useForm } from 'react-hook-form'

function Contact() {
    const { register, handleSubmit, watch, formState:{errors} } = useForm();

    const onSubmit = data => {

    }

  return (
    <div className='contact'>
        <Navigation />

        <div className='contact_content'>
            <div className='contact_title'>
                <h2>Hire Me</h2>
            </div>

            <div className='contact_thumbnail'>
                <img src='https://res.cloudinary.com/emacon-production/image/upload/v1601626977/Emacon%20Production/_MG_7971_ljafny.jpg' alt='Contact Klein Nettoh' />
            </div>

            <div className='contact_projects'>
                <h3>I'm currently taking on projects for the following: </h3>
                <ul>
                    {
                        MediaCategories &&
                        MediaCategories.map((item, index) => <li key={index}>{item.category}</li>)
                    }
                </ul>
            </div>

            <div className='contact_projects'>
                <h3>How To Hire Me </h3>
                <p>
                    You can hire me for half an hour or you can enter your contact info in the form below. Be sure to share as much info as you can on what you’re trying to achieve and what sort of budget you have in place.
                </p>
            </div>

            <div className='contact_form'>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className='input-group'>
                        <input type="text" placeholder='Your Name' id='name' className='input' {...register("name", {required: true})} />
                        <label for="name" className='input-label'>Your Name</label>
                        {errors.name && <span className='error_message'>This field is required</span>}
                    </div>
                    
                    <div className='input-group'>
                        <input className='input' placeholder='Your Email' {...register("email", {required: true})} />
                        <label for="name" className='input-label'>Your Email</label>
                        {errors.email && <span className='error_message'>This field is required</span>}
                    </div>
                    
                    <div className='input-group'>
                        <input className='input' placeholder='Subject' {...register("subject", {required: true})} />
                        <label for="name" className='input-label'>Subject</label>
                        {errors.subject && <span className='error_message'>This field is required</span>}
                    </div>

                    <div className='input-group'>
                        <textarea className='input' placeholder='Your Message' {...register("message", {required: true})} />
                        <label for="name" className='input-label'>Your Message</label>
                        {errors.subject && <span className='error_message'>This field is required</span>}
                    </div>
                    
                    <input className='submit_btn' />
                </form>
            </div>
        </div>

        <Footer />
    </div>
  )
}

export default Contact