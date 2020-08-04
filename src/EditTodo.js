import React from 'react';
import useFormHook from './FormHook';
function EditTodo({ editTodo, id, myFunc }) {
  const [text, setText, resetText] = useFormHook('');
  let newId = id;
  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(text, newId);
    myFunc();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' value={text} onChange={setText} />
        <button>Save</button>
      </form>
    </div>
  );
}

export default EditTodo;
