import React, { useState, useEffect } from 'react';
import Input from '../components/Input'
import PruebaInput from '../components/Prueba'


const Prueba = () => {
  return (
    <div>
        <PruebaInput label="First name"/>
        <PruebaInput label="Last name"/>
    </div>
  )
}

export default Prueba

/*const Prueba = () => {

    
    const [form, setForm] = useState({
        document_number: '',
        cellphone: '',
      });
    const [isActive, setIsActive] = useState(false);

    const handleChange = (value, name) => {
        //debugger;
        setForm({
            ...form,
            [name]: value,
        });

        if (value !== '') {
          setIsActive(true)
        }else {
          setIsActive(false)
        }
      };

  return (
    <div className='c-form'>
        <div className="c-form__row">
            <Input
                          type='text'
                          name='document_number'
                          className={`${isActive ? "is-active" : ""} form-control no-border-radius`}
                          value={form.document_number}
                          onChange={handleChange}
                      />
                <span className="focus-label">Nro. de documento</span>
        </div>
        <div className="c-form__row">
            <Input
                          type='text'
                          name='cellphone'
                          className={`${isActive ? "is-active" : ""} form-control no-border-radius`}
                          value={form.cellphone}
                          onChange={handleChange}
                      />
                <span className="focus-label">Celular</span>
        </div>
    </div>
  )
}

export default Prueba
*/

