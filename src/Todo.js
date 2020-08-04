import React, { useContext, memo } from 'react';
import useToggle from './Toggler';
import EditTodoForm from './EditTodoForm';
import { DispatchContext } from './context/todos.context';

function Todo({ task, completed, id }) {
  const dispatch = useContext(DispatchContext);
  const myStyle = {
    textDecoration: completed ? 'line-through' : 'none',
  };

  const handleEdit = () => {
    toggle();
  };

  const [isEditing, toggle] = useToggle(false);
   
  return (
    <div>
      {isEditing ? (
        <EditTodoForm id={id} task={task} toggle={toggle} />
      ) : (
        <div>
          <li style={myStyle}>
            {task}{' '}
            <input
              type='checkbox'
              defaultChecked={completed}
              onClick={() => {
                dispatch({ type: 'TOGGLE', id: id });
              }}
            />
            <button
              onClick={() => {
                dispatch({ type: 'REMOVE', id: id });
              }}
            >
              Delete
            </button>
            <button onClick={handleEdit}>Edit</button>
          </li>
        </div>
      )}
    </div>
  );
}

export default memo(Todo);
