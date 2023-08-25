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
                    <Control
                        type='radio'
                        name='terms'
                    >
                        Acepto la&nbsp;<a href="#">Politica de Privacidad</a>
                    </Control>                    
                </div>
                <div className="plan__option">2</div>
            </div>
            <div className="plans__detail">
                detalle
            </div>
        </div>
    </section>
  )
}

export default Plans