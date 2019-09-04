import React, { useReducer } from "react";

import Filter from '../../components/Filter';
import TodoList from '../../components/TodoList';
import AddTodo from "../../components/AddTodo";
import { initialTodos } from './db';
import { filterReducer, todoReducer } from './reducers';
import { TodoContext } from './context';


const TodoApp = () => {
  const [filter, dispatchFilter] = useReducer(filterReducer, 'ALL');
  const [todos, dispatchTodos] = useReducer(todoReducer, initialTodos);

  const filteredTodos = todos.filter(t => {
    if (filter === 'ALL') {
      return true;
    }

    if (filter === 'COMPLETE' && t.complete) {
      return true;
    }

    if (filter === 'INCOMPLETE' && !t.complete) {
      return true;
    }

    return false;
  })

  return (
    <>
        <div id='container'>
          <Filter dispatch={dispatchFilter} />
      <TodoContext.Provider value={dispatchTodos}>
          <TodoList todos={filteredTodos} />
          <AddTodo />
      </TodoContext.Provider>
        </div>
      
    </>
  );
}

export default TodoApp;