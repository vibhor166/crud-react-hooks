import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

function TodoState() {
  const initialTodosx = JSON.parse(
    window.localStorage.getItem('todos') || '[]'
  );

  const [todos, setTodos] = useState(initialTodosx);

  useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  
  return {
    todos,
    addTodo: (newTodoText) => {
      setTodos([
        ...todos,
        { id: uuidv4(), task: newTodoText, completed: false },
      ]);
      window.localStorage.setItem('todos', JSON.stringify(todos));
    },

    removeTodo: (todoId) => {
      const updatedTodos = todos.filter((todo) => {
        return todo.id !== todoId;
      });
      setTodos(updatedTodos);
    },

    toggleTodo: (todoId) => {
      const updatedTodos = todos.map((todo) => {
        if (todo.id === todoId) {
          return { ...todo, completed: !todo.completed };
        } else return todo;
      });
      setTodos(updatedTodos);
    },

    editTodo: (todoId, newTask) => {
      const updatedTodos = todos.map((todo) => {
        if (todo.id === todoId) {
          return { ...todo, task: newTask };
        } else return todo;
      });
      setTodos(updatedTodos);
    },
  };
}

export default TodoState;
