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
                    <div className="summary__inner">
                        <div className="summary__icon">

                        </div>
                        <div className="summary__name">Rocio Miranda Diaz</div>
                    </div>
                </div>
                <div className="summary__row">
                    <h3 className="summary__header">
                        Responsable de pago
                    </h3>
                </div>
                <div className="summary__row">
                    <h3 className="summary__header">
                        Plan Elegido
                    </h3>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Summary