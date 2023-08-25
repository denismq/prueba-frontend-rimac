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

const numberPattern = {
  value: /^(0|[1-9]\d*)(\.\d+)?$/,
  message: 'Solo numeros',
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
                  name="document_number"
                  control={control}
                  rules={{
                      required: {
                      value: true,
                      message: 'Selecciona una opcion',
                      },
                  }}
                  render={({ field: { onChange, onBlur, value} }) => (
                      <Select
                          options={documents}
                          name='document_number'
                          className={`form-control ${
                          errors['favorites'] ? 'is-invalid' : ''
                          }`}
                          value={value}
                          onChange={onChange}
                          onBlur={onBlur}
                      />
                  )}
              />
              {errors['favorites'] && <Error>{errors['favorites']?.message}</Error>}
            </div>
          </div>
          <div className="col-8 col-xs-8 col-sm-8 col-md-8 no-padding-left">
            <div className="c-form__row">
              <Controller
                name="cellphone"
                control={control}
                rules={{
                    required: {
                    value: true,
                    message: 'Ingrese telefono',
                    },
                    pattern: numberPattern,
                }}
                render={({ field: { onChange, onBlur, value} }) => (
                    <Input
                        type='text'
                        label='Teléfono celular'
                        name='cellphone'
                        placeholder='Ingrese su numero telefonico'
                        className={`form-control ${
                        errors['cellphone'] ? 'is-invalid' : ''
                        }`}
                        value={value}
                        onChange={onChange}
                        onBlur={onBlur}
                    />
                )}
              />
              {errors['cellphone'] && <Error>{errors['cellphone']?.message}</Error>}               
            </div>
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
