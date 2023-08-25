import React from 'react'
import Control from '../components/Control'

const Plans = () => {
  return (
    <section className='section section--plan'>
        <div className="content-steps">
            <ul className="steps">
                <li className="steps__item">
                    <span className="steps__number">1</span>
                    <span className="steps__text">Planes y Coberturas</span>
                </li>
                <li className="steps__item">
                    <span className="steps__dots"></span>
                </li>
                <li className="steps__item">
                    <span className="steps__number">2</span>
                    <span className="steps__text">Resumen</span>
                </li>
            </ul>
        </div>
        <div className="plans">
            <div className="plans__options">
                <div className="plans__option">
                    <input type="radio" id="for-me" name="plan"/>
                    <label htmlFor='for-me' className="plans__option-content">
                        <div className="wrapper-shape">
                            <div className="shape"></div>
                        </div>
                        <div className="plans__option-icon">
                            <img src="images/icono-para-mi.svg" alt="" className=''/>
                        </div>
                        <h2 className="plans__option-title">Para mi</h2>
                        <p className="plans__option-text">
                            Cotiza tu seguro de salud y agrega familiares si así lo deseas.
                        </p>
                    </label>                
                </div>
                <div className="plans__option">
                    <input type="radio" id="for-someone-else"  name="plan" />
                    <label htmlFor='for-someone-else' className="plans__option-content">
                        <div className="wrapper-shape">
                            <div className="shape"></div>
                        </div>
                        <div className="plans__option-icon">
                            <img src="images/icono-para-mi.svg" alt="" className=''/>
                        </div>
                        <h2 className="plans__option-title">Para alguien más</h2>
                        <p className="plans__option-text">
                            Cotiza tu seguro de salud y agrega familiares si así lo deseas.
                        </p>
                    </label>                
                </div>
            </div>
            <div className="plans__detail">
                <div className="plan">
                    <div className="plan__header">
                        <div className="plan__icon">
                            <img src="images/icono-plan-casa.svg" alt="" className=''/>
                        </div>
                        
                    </div>
                    <div className="plan__content">

                    </div>
                    <div className="plan__footer">

                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Plans