import React, { useState, useReducer } from "react";
import uuid from 'uuid/v4';


import DeleteIcon from '@material-ui/icons/Delete';
import { initialTodos } from './utils/db';
import { filterReducer, todoReducer } from './utils/reducers';


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
    dispatchTodos({ type: 'ADD_TODO', payload: { id: uuid(), task } });
    setTask('');
  };
  const handleChangeCheckbox = id => {
    dispatchTodos({ type: 'TOGGLE_TODO', payload: { id } });
  }

  const handleShowAll = () => {
    dispatchFilter({ type: 'SHOW_ALL' });
  };

  const handleShowComplete = () => {
    dispatchFilter({ type: 'SHOW_COMPLETE' });
  };

  const handleShowIncomplete = () => {
    dispatchFilter({ type: 'SHOW_INCOMPLETE' });
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
    <div id='container'>

      <div id='filters'>
        <button className='button' type='button' onClick={handleShowAll}>Show All</button>
        <button className='button' type='button' onClick={handleShowComplete}>Show Complete</button>
        <button className='button' type='button' onClick={handleShowIncomplete}>Show Incomplete</button>
      </div>

      {filteredTodos.map(todo => (
        <div className='listItemContainer'>
          <label className='checkContainer' key={todo.id}> {todo.task}
            <input
              type='checkbox'
              checked={todo.complete}
              onChange={() => handleChangeCheckbox(todo.id)}
            />
            <span className='checkmark' />
          </label>
          <DeleteIcon />
        </div>
      ))
      }

      <form onSubmit={handleSubmit}>
        <input type='text' value={task} onChange={handleChangeInput} />
        <button className='button' type='submit'>Add todo</button>
      </form>

    </div>
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