import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

import menuData from '../../assets/menuData.json'
import './navigation.css'

const clickOutsideRef = (content_ref, toggle_ref) => {
    document.addEventListener('mousedown', (e) => {
        // user click toogle
        if (toggle_ref.current && toggle_ref.current.contains(e.target)){
            content_ref.current.classList.toggle('active')
        } else {
            // user click outside toggle and content
            if (content_ref.current && !content_ref.current.contains(e.target)){
                content_ref.current.classList.remove('active')
            }
        }
    })
}

function Navigation() {
    const menu_ref = useRef(null);
    const menu_toggle_ref = useRef(null);

    clickOutsideRef(menu_ref, menu_toggle_ref);

    const setActiveMenu = () => menu_ref.current.classList.add('active');
    const closeMenu = () => menu_ref.current.classList.remove('active');

  return (
    <div className='navigation'>
        <Link to='/' className='menu_logo'>KLEIN NETTOH</Link>

        <div className='menu'>
            {
                menuData &&
                menuData.map((menu, index) => (
                    <Link to={menu.route} key={index} className='menu_link'>{menu.menu}</Link>
                ))
            }
        </div>

        <div className='mobileMenu_wrapper'>
            <div className='mobileMenu_btn' >
                <i class='bx bx-menu-alt-right' ref={menu_toggle_ref} onClick={() => setActiveMenu()}></i>
            </div>

            <div className='mobileMenu' ref={menu_ref}>
                <div className='mobileMenu_closeBtn' >
                    <i className="bx bx-x" onClick={() => closeMenu()}></i>
                </div>

                <div className='mobileMenu_menuWrapper'>
                    {
                        menuData &&
                        menuData.map((menu, index) => (
                            <Link to={menu.route} key={index} className='MobileMenu_menu_link'>{menu.menu}</Link>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navigation