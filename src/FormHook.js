import  { useState } from 'react';

function FormHook(initVal) {
  const [state, setState] = useState(initVal);
  const setVal = (e) => {
    setState(e.target.value);
  };
  const resetVal = () => {
    setState('');
  };
  return [state, setVal, resetVal];
}

export default FormHook;
