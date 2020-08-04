import React, { createContext, useReducer } from 'react';

import todoReducer from '../reducers/todo.reducer';

export const TodosContext = createContext();
export const DispatchContext = createContext();
export function TodosProvider(props) {
  const [todos, dispatch] = useReducer(todoReducer, []);

  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
        {/* props.children is wrapped in two providers */}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  );
}
