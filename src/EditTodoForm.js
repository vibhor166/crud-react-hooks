import React, { useContext } from 'react';
import useFormHook from './FormHook';
import { DispatchContext } from './context/todos.context';

function EditTodoForm({ id, task, toggle }) {
  const  dispatch  = useContext(DispatchContext);
  const [value, handleChange, reset] = useFormHook(task);
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: 'EDIT', id: id, newTask: value });
          reset();
          toggle();
        }}
      >
        <input type='text' value={value} onChange={handleChange} />
        <button>Save</button>
      </form>
    </div>
  );
}

export default EditTodoForm;
