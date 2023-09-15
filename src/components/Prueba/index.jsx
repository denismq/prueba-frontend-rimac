import React, { useState, useEffect } from 'react';

export default function TextInput({ type = 'text', label }) {
    const [value, setValue] = useState('');
  
    function handleChange(e) {
      setValue(e.target.value);
    }
  
    return (
      <div className="input-container">
        <input type={type} value={value} onChange={handleChange} />
        <label className={value && 'filled'} htmlFor={name}>
          {label}
        </label>
      </div>
    );
  }

/*
https://jacobruiz.com/blog/2021/2/11/how-to-transition-placeholder-text-into-a-label-in-react-floating-label-inputs
https://codesandbox.io/s/floating-label-input-zveb7?from-embed=&file=/src/styles.css:395-1248

https://dev.to/rafacdomin/creating-floating-label-placeholder-for-input-with-reactjs-4m1f
https://jsfiddle.net/velhobit/4eu2r0q5/
Creating Floating Label/Placeholder for Input with ReactJS
https://dev.to/chrsgrrtt/floating-label-input-with-react-and-tailwind-2e5h
https://codepen.io/chrsgrrtt/pen/MWypegr
https://codesandbox.io/s/floating-input-placeholder-forked-3tvf50?file=/src/App.js

*/