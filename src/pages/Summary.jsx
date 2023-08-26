import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Summary = () => {

    const navigate = useNavigate();
    
    const user = useSelector((state) => state.user);
    const {userName, userLastName, userDocumentType, userDocument, userPhone} = user;
    const plans = useSelector((state) => state.plan);
    const {plan, price} = plans;

  return (
    <section className="section section--summary">
        <div className="content-steps">
            <ul className="steps">
                <li className="steps__item">
                    <span className="steps__number">1</span>
                    <span className="steps__text">Planes y Coberturas</span>
                </li>
                <li className="steps__item">
                    <span className="steps__dots"></span>
                </li>
                <li className="steps__item active">
                    <span className="steps__number">2</span>
                    <span className="steps__text">Resumen</span>
                </li>
            </ul>
        </div>        
        <div className="plans">
            <div className="back" onClick={() => navigate('/plans') }>
                <div className="back__icon">

                </div>
                <p className="back__text">Volver</p>
            </div>            
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
                        <p>{userDocumentType}: {userDocument}</p>
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