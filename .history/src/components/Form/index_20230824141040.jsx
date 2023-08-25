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

const Form = () => {
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
