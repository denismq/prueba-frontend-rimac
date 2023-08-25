import React from 'react';
import { useState } from 'react';

const Control = ({ text, checked, children, onChange, ...props}) => {
  console.log(text);
  console.log(checked);
  //debugger;
  const defaultChecked = checked ? checked : false;

  //console.log(defaultChecked);
  const [isChecked, setIsChecked] = useState(false);

  const { type } = { ...props };
  console.log('Checked? ' + isChecked);

  const handleChange = (e) => {
    //const { value, name } = e.target;
    //onChange(value.checked, name);
    onChange(e.target.checked);
  };

  return (
    <>
      <label className={`c-control c-control--${type}`}>
        <input
          //checked={isChecked}
          //onChange={() => setIsChecked(!isChecked)}
          onChange={handleChange}
          {...props}
        />
        <div className='c-control__shape'></div>
        {/*<span className='c-control__text'>{text}</span>*/}
        { children }
      </label>
    </>
  );
};

export default Control;
