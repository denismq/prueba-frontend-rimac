import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Input from '../Input';
import Select from '../Select';
import Control from '../Control';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../redux/actions/userActions';

const documents = [
  { label: 'DNI', value: 'DNI' },
  { label: 'RUC', value: 'RUC' },
];

const numberPattern = {
  value: /^(0|[1-9]\d*)(\.\d+)?$/,
  message: 'Solo numeros',
};

const defaultValues = {
  document_type: documents[0].value,
  document_number: '',
  cellphone: ''
};

const Form = () => {

  
  const [isCheckedPrivacy, setIsCheckedPrivacy] = useState(true);
  const [isCheckedCC, setIsCheckedCC] = useState(true);
  const [focus, setFocus] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [maxNumDoc, setMaxNumDoc] = useState(8);
  const user = useSelector((state) => state.user);
  const {states} = user;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
    } = useForm({
      defaultValues,
    });

  const onSubmit = (data) => {
      dispatch(getUser(data.document_type, data.document_number, data.cellphone))
  }

  useEffect(() => {
    if (states.success) {
      navigate('/plans');
    }
  }, [states])
  
  const handleFocus = (val) => {
    setFocus(val)
  };

  const handleChange = (val) => {
    //debugger;
    setInput(val)
    if (val !== '') {
      setIsActive(true)
    }else {
      setIsActive(false)
    }
  };

  const handleMaxLength = (val) => {
    const maxLength = val === 'DNI' ? 8 : 11;
    setValue('document_number', '');
    setMaxNumDoc(maxLength);
  };

  const Error = ({ children }) => <p style={{ color: 'red', fontSize: '14px', fontFamily: 'Lato' }}>{children}</p>; 

  return (
    <div className='c-form'>
      <div className='c-form__tag'>Seguro Salud Flexible</div>
      <div className="c-form__content-mobile">
        <header className="headline">
          <h1 className="headline__title">Creado para ti y tu familia</h1>
          <p className="headline__description">Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría. 100% online.</p>
        </header>
        <div className="c-form__banner-mobile">
          <img src="images/banner-mobile.png" alt="" className=''/>
        </div>
      </div>
      <div className="c-form__inner">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-4 col-xs-4 col-sm-4 col-md-4 no-padding-right">
              <div className="c-form__row">
                <Controller
                    name="document_type"
                    control={control}
                    render={({ field: { onChange, onBlur, value} }) => (
                        <Select
                            options={documents}
                            name='document_type'
                            className= 'form-control'
                            value={value}
                            onChange={(val) => {
                              onChange(val);
                              console.log(val);
                              handleMaxLength(val);
                            }}                            
                            onBlur={onBlur}
                        />
                    )}
                />
                {errors['document_type'] && <Error>{errors['document_type']?.message}</Error>}
              </div>
            </div>
            <div className="col-8 col-xs-8 col-sm-8 col-md-8 no-padding-left">
              <div className="c-form__row">
                <Controller
                  name="document_number"
                  control={control}
                  rules={{
                      required: {
                      value: true,
                      message: 'Ingrese numero de documento',
                      },
                      pattern: numberPattern,
                  }}
                  render={({ field: { onChange, onBlur, value} }) => (
                      <Input
                          type='text'
                          name='document_number'
                          className={`${isActive ? "is-active" : ""} form-control no-border-radius ${
                          errors['document_number'] ? 'is-invalid' : ''
                          }`}
                          value={value}
                          //onChange={onChange}
                          onChange={(value) => {
                            onChange(value);
                            //debugger;
                            handleChange(value)
                          }}
                          /*onBlur={(val) => {
                            onBlur(val)
                            handleFocus(true)
                          }}*/
                          /*onFocus={() => {
                            //onBlur(val)
                            handleFocus(true)
                          }}
                          onBlur={() => {
                            //onBlur(val)
                            handleFocus(false)
                          }}*/
                          maxLength={maxNumDoc}
                      />
                  )}
                />
                <span className="focus-label">Nro. de documento</span>
                {errors['document_number'] && <Error>{errors['document_number']?.message}</Error>}               
              </div>
            </div>           
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="c-form__row">
                <Controller
                    name="cellphone"
                    control={control}
                    rules={{
                        required: {
                        value: true,
                        message: 'Ingrese numero de telefono',
                        },
                        pattern: numberPattern,
                    }}
                    render={({ field: { onChange, onBlur, value} }) => (
                        <Input
                            type='text'
                            name='cellphone'
                            className={`${isActive ? "is-active" : ""} form-control ${
                            errors['cellphone'] ? 'is-invalid' : ''
                            }`}
                            value={value}
                            onChange={(value) => {
                              onChange(value);
                              handleChange(value)
                            }}
                            /*onBlur={(val) => {
                              onBlur(val)
                              handleFocus(true)
                            }}*/
                            /*onFocus={() => {
                              //onBlur(val)
                              handleFocus(true)
                            }}
                            onBlur={() => {
                              //onBlur(val)
                              handleFocus(false)
                            }}*/
                        />
                    )}
                />
                <span className="focus-label">Celular</span>
                {errors['cellphone'] && <Error>{errors['cellphone']?.message}</Error>}                 
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="c-form__row">
                  <Controller
                      name="terms"
                      control={control}
                      rules={{
                          required: {
                          value: true,
                          message: 'Selecciona opción',
                          },
                      }}
                      render={({ field: { onChange, onBlur, value} }) => (
                          <Control
                              type='checkbox'
                              name='terms'
                              onChange={(val) => {
                                  onChange(val)
                              }}
                              checked={isCheckedPrivacy}
                          >
                              Acepto la&nbsp;<a href="#">Politica de Privacidad</a>
                          </Control>
                      )}
                  />
                  {errors['terms'] && <Error>{errors['terms']?.message}</Error>}                        
              </div>
            </div> 
            <div className="col-md-12">
              <div className="c-form__row">
                <Controller
                        name="personal"
                        control={control}
                        rules={{
                            required: {
                            value: true,
                            message: 'Selecciona opción',
                            },
                        }}
                        render={({ field: { onChange, onBlur, value} }) => (
                            <Control
                                type='checkbox'
                                name='personal'
                                onChange={(val) => {
                                    onChange(val)
                                }}
                                checked={isCheckedCC}
                            >
                                Acepto la&nbsp;<a href="#">Política Comunicaciones Comerciales</a>
                                {/*Acepto el&nbsp;<a href="#datos"> uso de datos personales</a>*/}
                            </Control>
                        )}
                    />
                    {errors['personal'] && <Error>{errors['personal']?.message}</Error>}                          
              </div>
            </div>   
            <div className="col-md-12">
              <Link to="#" className='c-form__terms'>
                Aplican términos y condiciones
              </Link>               
            </div>
            <div className="col-md-12">
              <div className="c-form__row">
                <button type='submit' className='c-button' disabled={states.loading}>
                {states.loading ? (
                  <>
                    Cargando...
                    <span className='spinner-border spinner-border-sm ms-2'></span>
                  </>
                ) : (
                  'Cotiza Aquí'
                )}
                </button>
              </div>
            </div>                        
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
