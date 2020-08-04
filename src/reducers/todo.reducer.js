import { v4 as uuidv4 } from 'uuid';

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, { id: uuidv4(), task: action.task, completed: false }];
    case 'REMOVE':
      return state.filter((todo) => todo.id !== action.id);
    case 'TOGGLE':
      const updatedTodos1 = state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, completed: !todo.completed };
        } else return todo;
      });
      return updatedTodos1;
    case 'EDIT':
      const updatedTodos = state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, task: action.newTask };
        } else return todo;
      });
      return updatedTodos;
    default:
      return state;
  }
};

export default reducer;
