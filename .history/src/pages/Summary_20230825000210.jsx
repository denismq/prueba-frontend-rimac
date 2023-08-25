import React from 'react'

const Summary = () => {
  return (
    <section className="section section--summary">
        <div className="plans">
            <header className="headline">
                <h1 className="headline__title">
                    Resumen del seguro
                </h1>
            </header>
            <div className="summary">
                <div className="summary__row">
                    <span>PRECIOS CALCULADOS PARA:</span>
                    <div className="summary__name">
                        <div className="summary__icon">
                            <img src="images/icono-persona.svg" alt="" className=''/>
                        </div>
                        <div className="summary__text">Rocio Miranda Diaz</div>
                    </div>
                </div>
                <div className="summary__row">
                    <h3 className="summary__header">
                        Responsable de pago
                    </h3>
                    <div className="summary__content">
                        <p>DNI: 44444444</p>
                        <p>Celular: 99999999</p>
                    </div>
                </div>
                <div className="summary__row">
                    <h3 className="summary__header">
                        Plan Elegido
                    </h3>
                    <div className="summary__content">
                        <p>Plan en Casa y Clinica</p>
                        <p>Costo del Plan: $99 al mes</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Summary