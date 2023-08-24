import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Input from '../Input';
import Select from '../Select';
import Control from '../Control';

const Form = () => {
  return (
    <div className='c-form'>
      <div className='c-form__tag'>Seguro Salud Flexible</div>
      <header className="headline">
        <h1 className="headline__title">Creado para ti y tu familia</h1>
        <p className="headline__description">Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría. 100% online.</p>
      </header>
      <div className="c-form__inner">
        <div className="row">
          <div className="col-4 col-xs-4 col-sm-4 col-md-4">
            <Input
              type='text'
              label='Nombres'
              name='firstname'
              placeholder='Ingrese sus nombres'
              className={`form-control`}
              //value={}
              //onChange={''}
              //onBlur={''}
            />
          </div>
          <div className="col-8 col-xs-8 col-sm-8 col-md-8">
          <Input
              type='text'
              label='Nombres'
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
              label='Nombres'
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
