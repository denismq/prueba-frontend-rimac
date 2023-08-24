import React from 'react';

const Select = ({
  options,
  value,
  name,
  disabled = false,
  placeholder,
  onChange,
  onBlur,
  label,
  className
}) => {
  const handleChange = (e) => {
    /*const { value } = e.target;
    onChange(value);*/
    const { value, name } = e.target;
    onChange(value, name);
  };

  const isDisabled = options?.length === 0 ? true : false;

  return (
    <>
      {label && <label htmlFor=''>{label}</label>}
      <select
        name={name}
        onChange={handleChange}
        onBlur={onBlur}
        className={className}
        value={value}
        disabled={isDisabled}
      >
        {placeholder && (
          <option value={''} disabled>
            {placeholder}
          </option>
        )}
        {options?.map(({ value, label }, index) => {
          return (
            <option key={index} value={value}>
              {label}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default Select;
