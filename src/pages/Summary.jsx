import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const Summary = () => {

    const user = useSelector((state) => state.user);
    const {userName, userLastName, userDocument, userPhone} = user;
    const plans = useSelector((state) => state.plan);
    const {plan, price} = plans;

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
                        <div className="summary__text">{userName} {userLastName}</div>
                    </div>
                </div>
                <div className="summary__row">
                    <h3 className="summary__header">
                        Responsable de pago
                    </h3>
                    <div className="summary__content">
                        <p>DNI: {userDocument}</p>
                        <p>Celular: {userPhone}</p>
                    </div>
                </div>
                <div className="summary__row">
                    <h3 className="summary__header">
                        Plan Elegido
                    </h3>
                    <div className="summary__content">
                        <p>{plan}</p>
                        <p>Costo del Plan: {`$ ${price}`} al mes</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Summary