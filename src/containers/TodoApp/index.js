import React, { useReducer } from "react";

import Filter from '../../components/Filter';
import TodoList from '../../components/TodoList';
import AddTodo from "../../components/AddTodo";
import { initialTodos } from '../../utils/db';
import { filterReducer, todoReducer } from '../../utils/reducers';
import { TodoContext } from '../../utils/context';


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
      <TodoContext.Provider value={dispatchTodos}>
        <div id='container'>
          <Filter dispatch={dispatchFilter} />
          <TodoList todos={filteredTodos} />
          <AddTodo />
        </div>
      </TodoContext.Provider>
      
    </>
  );
}

export default TodoApp;