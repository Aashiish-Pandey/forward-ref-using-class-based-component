import React, { Component, useRef } from 'react';
import FRInput from './FRInput';

const FRParent = () => {
  const inputRef = useRef();
  const clickHandler = () => {
    inputRef.current.focus();
  };
  return (
    <div>
      <FRInput ref={inputRef} />
      <button onClick={clickHandler}>Focus Input</button>
    </div>
  );
};

export default FRParent;
