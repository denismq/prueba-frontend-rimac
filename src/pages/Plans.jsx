import React, { useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { getPlans, getSelectedPlan } from '../redux/actions/planActions';

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

    const today = new Date();
    const birthDate = new Date(userBirthday);
    const currentAge = today.getFullYear() - birthDate.getFullYear();

    
    var planFilter = list.filter(function (list) {
        return list.age >= currentAge;
    });
    console.log(planFilter);

    /*var planFilterDescuento = list.filter(function (list) {
        const descuento = list.price * 0.05
        const total = list.price - descuento;
        return total;
    });

    console.log('descuento', planFilterDescuento)*/

    const handlePlanClick = (index) => {
        setActivePlan(index);
        //console.log('index plan', index);
    };

    const getUserPlan = () => {
        dispatch(getPlans())
      };

    useEffect(() => {
        getUserPlan();
    }, []);

    const getSelectedPlanOption = (plan, price, activePlan) => {
        //debugger
        if (activePlan === 1) {
            const price_discount = Math.abs((price * 0.05) - price)
            dispatch(getSelectedPlan(plan, price_discount))
        }else {
            dispatch(getSelectedPlan(plan, price))
        }
    }

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
                  activePlan !== null && planFilter.map((plan, index) => {
                    return (
                        <div className="plan" key={index}>
                            <div className="plan__header">
                                <div className="plan__title">
                                    <h3>{plan.name}</h3>
                                    <div className="plan__cost">
                                        <p className='plan__cost-text'>COSTO DEL PLAN</p>
                                        <p className='plan__cost-price'>
                                            {`$ ${activePlan === 1 ? Math.abs((plan.price * 0.05) - plan.price) : plan.price} `} 
                                            al mes
                                        </p>
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
                                <button type="submit" className="c-button c-button--red" onClick={() => getSelectedPlanOption(plan.name, plan.price, activePlan)}>Seleccionar Plan</button>
                            </div>
                        </div>
                    )

                    })
                }
            </div>
        </div>
    </section>
  )
}

export default Plans