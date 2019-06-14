import React, { useReducer } from "react";

import Filter from './components/Filter';
import TodoList from './components/TodoList';
import { initialTodos } from './utils/db';
import { filterReducer, todoReducer } from './utils/reducers';
import { CssBaseline } from "@material-ui/core";
import AddTodo from "./components/AddTodo";


/*
const initialState = {
  filter: 'ALL', // managed by filterReducer
  todos: initialTodos, // by todoReducer
  task: '', // by useState
}
*/
const App = () => {
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
      <CssBaseline />

      <div id='container'>
        <Filter dispatch={dispatchFilter} />
        <TodoList dispatch={dispatchTodos} todos={filteredTodos} />
        <AddTodo dispatch={dispatchTodos} />
      </div>
    </>
  );
}

export default App;


  // MY FILTERED TODOS FUNCTION
  // 
  // const filteredTodos = () => {
  //   if (filter === 'ALL') {
  //     return todos;
  //   } else if (filter === 'COMPLETE') {
  //     return todos.filter(t => t.complete === true);
  //   } else if (filter === 'INCOMPLETE') {
  //     return todos.filter(t => t.complete === false)
  //   } else {
  //     throw new Error();
  //   }
  // };