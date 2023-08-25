import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Input from '../Input';
import Select from '../Select';
import Control from '../Control';

const documents = [
  { label: 'DNI', value: 'dni' },
  { label: 'RUC', value: 'ruc' },
];

const emailPattern = {
  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  message: 'Ingrese un email valido',
};

const defaultValues = {
  document_number: '',
  cellphone: ''
};

const Form = () => {

  const {
    handleSubmit,
    control,
    reset,
    formState: { isSubmitting, errors, isSubmitSuccessful },
    } = useForm({
    defaultValues,
    });

  const onSubmit = (data) => {
      console.log(data);
  }

  const Error = ({ children }) => <p style={{ color: 'red', fontSize: '14px' }}>{children}</p>; 

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
        <div className="row">
          <div className="col-4 col-xs-4 col-sm-4 col-md-4 no-padding-right">
            <div className="c-form__row">
              <Controller
                name="firstname"
                control={control}
                rules={{
                    required: {
                    value: true,
                    message: 'Ingrese nombres',
                    },
                }}
                render={({ field: { onChange, onBlur, value} }) => (
                    <Input
                        type='text'
                        label='Nombres'
                        name='firstname'
                        placeholder='Ingrese sus nombres'
                        className={`form-control ${
                        errors['firstname'] ? 'is-invalid' : ''
                        }`}
                        value={value}
                        onChange={onChange}
                        onBlur={onBlur}
                    />
                )}
              />                    
              {errors['firstname'] && <Error>{errors['firstname']?.message}</Error>}              
            </div>
            <Input
              type='text'
              name='firstname'
              placeholder='Ingrese sus nombres'
              className={`form-control`}
              //value={}
              //onChange={''}
              //onBlur={''}
            />
          </div>
          <div className="col-8 col-xs-8 col-sm-8 col-md-8 no-padding-left">
          <Input
              type='text'
              name='firstname'
              placeholder='Ingrese sus nombres'
              className={`form-control`}
              //value={}
              //onChange={''}
              //onBlur={''}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="c-form__row">
            <Input
              type='text'
              name='firstname'
              placeholder='Ingrese sus nombres'
              className={`form-control`}
              //value={}
              //onChange={''}
              //onBlur={''}
            />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
