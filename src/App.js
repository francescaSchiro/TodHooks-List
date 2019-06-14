import React, { useState, useReducer } from "react";
import uuid from 'uuid/v4';


import Filter from './components/Filter';
import TodoList from './components/TodoList';


import AddBoxIcon from '@material-ui/icons/AddBox';
import IconButton from '@material-ui/core/IconButton';
import { initialTodos } from './utils/db';
import { filterReducer, todoReducer } from './utils/reducers';
import { CssBaseline } from "@material-ui/core";


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
  const [task, setTask] = useState('');

  const handleChangeInput = e => {
    setTask(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (task.trim() === '') {
      alert('Sorry, you cannot add an empty todo!')
    } else {
      dispatchTodos({ type: 'ADD_TODO', payload: { id: uuid(), task } });
    }
    setTask('');
  };

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


        <form onSubmit={handleSubmit}>
          <input type='text' value={task} onChange={handleChangeInput} placeholder='Type your next todo...' />
          <IconButton type='submit' children={<AddBoxIcon />} />
        </form>

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