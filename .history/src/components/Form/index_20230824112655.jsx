import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';

const Form = () => {
  return (
    <div className='c-form'>
      <div className='c-form__tag'>Seguro Salud Flexible</div>
      <header className="headline">
        <h1 className="headline__title">Creado para ti y tu familia</h1>
        <p className="headline__description">Para adquirir nuestro descuento especial por <span className='text-orange'>Cyber Days</span> sigue los siguientes pasos</p>
      </header>
    </div>
  );
};

export default Form;
