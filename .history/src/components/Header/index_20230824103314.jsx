import React from 'react'

const Header = () => {
  return (
    <header className='main-header'>
        <div className="o-container">
            <div className="main-header__inner">
                <a href="" className='logo'>
                    <img src="images/logo-rimac.svg" alt="Logo" />
                </a>
                <div className="main-header__inner-right">
                  <p>¡Compra por este medio! </p>
                  <p>(01) 411 6001</p>
                </div>                    
            </div>
        </div>
    </header>
  )
}

export default Header