import React from 'react';

const Input = ({
  label,
  name,
  type,
  value,
  placeholder,
  onChange,
  onBlur,
  className,
  ...props
}) => {
  const handleChange = (e) => {
    const { value, name } = e.target;
    onChange(value, name);
  };

  return (
    <>
      {label && <label>{label}</label>}
      <input
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={onBlur}
        //className='form-control'
        className={className}
        {...props}
      />
    </>
  );
};

export default Input;
