import React from 'react'

const Header = () => {
  return (
    <header className='main-header'>
        <div className="o-container">
            <div className="main-header__inner">
                <div className="main-header__inner-left">
                  <a href="#" className='logo'>
                      <img src="images/logo-rimac.svg" alt="Logo" />
                  </a> 
                </div>
                <div className="main-header__inner-right">
                  <p className='main-header__text'>¡Compra por este medio! </p>
                  <p className="main-header__contact">(01) 411 6001</p>
                </div>                    
            </div>
        </div>
    </header>
  )
}

export default Header