import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='header'>
        <img
        className='header_logo'
        src='./NTO.png' 
        />

        <div className='header_search'>
            <input
            className='header_searchInput'
            type= 'text' />
            {/*Logo */}
        </div>

        <div className='header_nav'>
            <div className='header_option'>
                <span className='header_optionLineOne'>
                    Sign In</span>

            </div>

            <div className='header_option'>
            <span className='header_optionLineTwo'>
                    Orders</span>

            </div>
            <div className='header_option'>
            <span className='header_optionLineThree'>
                    Prime</span>
                
            </div>
            <div className='header_option'>
            <span className='header_optionLineFour'>
                    Gama</span>
                
            </div>

        </div>

    </div>
  );
}

export default Header;