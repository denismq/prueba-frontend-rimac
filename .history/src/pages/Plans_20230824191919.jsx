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
            <div className="plan__options">
                <div className="plan__option">
                    <input type="radio" />
                    <label className="plan__option-content">
                        <div className="plan__option-icon">
                            <img src="images/icono-para-mi.svg" alt="" className=''/>
                        </div>
                        <h2 className="plan__option-title">Para mi</h2>
                        <p className="plan__option-text">
                            Cotiza tu seguro de salud y agrega familiares si así lo deseas.
                        </p>
                    </label>                
                </div>
            </div>
            <div className="plans__detail">
                detalle
            </div>
        </div>
    </section>
  )
}

export default Plans