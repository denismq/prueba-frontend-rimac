import React from 'react';

const Input = ({
  label,
  name,
  type,
  value,
  floatingLabel,
  floatingClassName,
  floatingHasValue,
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

  const handleOnBlur = (e) => {
    onBlur(e.target.value);
  }
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
        className={className}
        {...props}
      />
      {
        floatingLabel && <label className={`${floatingClassName} ${value && floatingHasValue}`}>{floatingLabel}</label>
      }
    </>
  );
};

export default Input;
/*
https://jacobruiz.com/blog/2021/2/11/how-to-transition-placeholder-text-into-a-label-in-react-floating-label-inputs
https://coreui.io/react/docs/forms/floating-labels/
https://react-bootstrap.netlify.app/docs/forms/floating-labels/
classname react conditional
https://mui.com/material-ui/react-text-field/
floating label react component
*/