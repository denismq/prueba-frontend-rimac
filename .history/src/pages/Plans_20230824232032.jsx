import React from 'react'

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
            <header className="headline">
                <h1 className="headline__title">
                    Rocío ¿Para quién deseas cotizar?
                </h1>
                <p className="headline__description">
                    Selecciona la opción que se ajuste más a tus necesidades
                </p>
            </header>
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
                        <div className="plan__title">
                            <h3>Plan en Casa</h3>
                            <div className="plan__cost">
                                <p className='plan__cost-text'>COSTO DEL PLAN</p>
                                <p className='plan__cost-price'>$39 al mes</p>
                            </div>
                        </div>
                        <div className="plan__icon">
                            <img src="images/icono-plan-casa.svg" alt="" className=''/>
                        </div>
                        
                    </div>
                    <div className="plan__content">
                        <ul className='plan-list'>
                            <li className='plan-list__item'>
                                <span>
                                    Medico general a domicilio
                                    por S/20 y medicinas cubiertas al 100%
                                </span>
                            </li>
                            <li className='plan-list__item'>
                                Videoconsulta y orientación telefónica al 100% 
                                en medicina general + pediatría.
                            </li>
                            <li className='plan-list__item'>
                                Indemnización de S/300 en caso de hospitalización 
                                por más de un día.
                            </li>
                        </ul>
                    </div>
                    <div className="plan__footer">
                        <button type="submit" className="c-button c-button--red">Seleccionar Plan</button>
                    </div>
                </div>
                <div className="plan">
                    <div className="plan__header">
                        <div className="plan__title">
                            <h3>Plan en Casa y Clínica</h3>
                            <div className="plan__cost">
                                <p className='plan__cost-text'>COSTO DEL PLAN</p>
                                <p className='plan__cost-price'>$39 al mes</p>
                            </div>
                        </div>
                        <div className="plan__icon">
                            <img src="images/icono-plan-casa-clinica.svg" alt="" className=''/>
                        </div>
                        
                    </div>
                    <div className="plan__content">
                        <ul className='plan-list'>
                            <li className='plan-list__item'>
                                <span>
                                    Consultas en clínica para cualquier especialidad. 
                                </span>
                            </li>
                            <li className='plan-list__item'>
                                Medicinas y exámenes derivados cubiertos al 80%
                            </li>
                            <li className='plan-list__item'>
                                Atención médica en más de 200 clínicas del país.
                            </li>
                        </ul>
                    </div>
                    <div className="plan__footer">
                        <button type="submit" className="c-button c-button--red">Seleccionar Plan</button>
                    </div>
                </div>
                <div className="plan">
                    <div className="plan__header">
                        <div className="plan__title">
                            <h3>Plan en Casa + Chequeo</h3>
                            <div className="plan__cost">
                                <p className='plan__cost-text'>COSTO DEL PLAN</p>
                                <p className='plan__cost-price'>$39 al mes</p>
                            </div>
                        </div>
                        <div className="plan__icon">
                            <img src="images/icono-plan-casa-chequeo.svg" alt="" className=''/>
                        </div>
                        
                    </div>
                    <div className="plan__content">
                        <ul className='plan-list'>
                            <li className='plan-list__item'>
                                <span>
                                    Un Chequeo preventivo general de manera presencial o virtual.
                                </span>
                            </li>
                            <li className='plan-list__item'>
                                Acceso a Vacunas en el Programa del MINSA en centros privados. 
                            </li>
                            <li className='plan-list__item'>
                                Incluye todos los beneficios del Plan en Casa. 
                            </li>
                        </ul>
                    </div>
                    <div className="plan__footer">
                        <button type="submit" className="c-button c-button--red">Seleccionar Plan</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Plans