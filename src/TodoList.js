import React, { useContext} from 'react';
import Todo from './Todo';
import { TodosContext } from './context/todos.context';

function TodoList() {
  
  const todos  = useContext(TodosContext);
  
  return (
    <div>
      TodoList
      <hr />
      {todos.map((todo) => (
        <Todo
          task={todo.task}
          key={todo.id}
          completed={todo.completed}
          id={todo.id}
        />
      ))}
    </div>
  );
}
export default TodoList;
