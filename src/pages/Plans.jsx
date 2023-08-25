import React, { useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { getPlans } from '../redux/actions/planActions';

const planOptions = [
    { 
        label: "Para mi", 
        content: "Cotiza tu seguro de salud y agrega familiares si así lo deseas.", 
        image: "images/icono-para-mi.svg",
    },
    { 
        label: "Para alguien más", 
        content: "Realiza una cotización para uno de tus familiares o cualquier persona.", 
        image: "images/icon-alguien-mas.svg"
    },
  ];

const Plans = () => {

    const dispatch = useDispatch();
    const [activePlan, setActivePlan] = useState(null);
    


    const navigate = useNavigate();

    const user = useSelector((state) => state.user);
    const {userName, userLastName, userBirthday} = user;
    const plan = useSelector((state) => state.plan);
    const {list} = plan;
    //console.log('lista', list)
    //console.log('cumpleaños', userBirthday)

    var today = new Date();
    var birthDate = new Date(userBirthday);
    var currentAge = today.getFullYear() - birthDate.getFullYear();

    
    var planFilter = list.filter(function (list) {
        return list.age >= currentAge;
    });
    console.log(planFilter);


    const handlePlanClick = (index) => {
        setActivePlan(index);
    };

    const getUserPlan = () => {
        dispatch(getPlans())
      };

    useEffect(() => {
    
        getUserPlan();
        //console.log(list);
    }, []);

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
            <div className="back">
                <Link to={'/'}>
                    <div className="back__icon">

                    </div>
                    <p className="back__text">Volver</p>
                </Link>
            </div>
            <header className="headline">
                <h1 className="headline__title">
                    {userName} {userLastName} ¿Para quién deseas cotizar?
                </h1>
                <p className="headline__description">
                    Selecciona la opción que se ajuste más a tus necesidades
                </p>
            </header>
            <div className="plans__options">
                {
                    planOptions.map((plan, index) => (
                        <div  
                            key={index} 
                            onClick={() => handlePlanClick(index)}
                            className={`plans__option ${activePlan === index ? "active" : ""}`}    
                        >
                            <input type="radio" id={`plan-${index}`} name="plan"/>
                            <label htmlFor={`plan-${index}`} className="plans__option-content">
                                <div className="wrapper-shape">
                                    <div className="shape"></div>
                                </div>
                                <div className="plans__option-icon">
                                    <img src={plan.image} alt="imagen plan"/>
                                </div>
                                <h2 className="plans__option-title">{plan.label}</h2>
                                <p className="plans__option-text">
                                    {plan.content}
                                </p>
                            </label>                
                        </div>
                    ))
                }
            </div>
            <div className="plans__detail">
                {
                    planFilter.map((plan, index) => (
                        <div className="plan" key={index}>
                            <div className="plan__header">
                                <div className="plan__title">
                                    <h3>{plan.name}</h3>
                                    <div className="plan__cost">
                                        <p className='plan__cost-text'>COSTO DEL PLAN</p>
                                        <p className='plan__cost-price'>{`$${plan.price}`} al mes</p>
                                    </div>
                                </div>
                                <div className="plan__icon">
                                    <img src="images/icono-plan-casa.svg" alt="" className=''/>
                                </div>
                                
                            </div>
                            <div className="plan__content">
                                <ul>
                                    {
                                        plan.description.map((description, index) => (
                                            <li className='plan-list__item' key={index}>
                                                <span>
                                                    {description}
                                                </span>
                                            </li>
                    
                                        ))
                                    }

                                </ul>
                            </div>
                            <div className="plan__footer">
                                <button type="submit" className="c-button c-button--red">Seleccionar Plan</button>
                            </div>
                        </div>

                    ))
                }
                {/*<div className="plan">
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
                */}
                {/*<div className="plan">
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
                */}
            </div>
        </div>
    </section>
  )
}

export default Plans