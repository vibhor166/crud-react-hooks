import React, { useContext } from 'react';
import useFormHook from './FormHook';
import { DispatchContext } from './context/todos.context';

function TodoForm() {
  const  dispatch  = useContext(DispatchContext);
  const [textval, setText, resetText] = useFormHook('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD', task: textval });
    resetText();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' value={textval} onChange={setText} />
        <button>Add Task</button>
      </form>
    </div>
  );
}
export default TodoForm;
