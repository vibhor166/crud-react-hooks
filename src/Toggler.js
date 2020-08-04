import { useState } from 'react';
function Toggler(initval) {
  const [state, setState] = useState(initval);
  function toggle() {
    setState(!state);
  }
  return [state, toggle];
}

export default Toggler;
