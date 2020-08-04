import React from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import { TodosProvider } from './context/todos.context';

function ToDoApp() {
  return (
    <div>
      <TodosProvider>
        <TodoForm />
        <TodoList />
      </TodosProvider>
    </div>
  );
}

export default ToDoApp;
