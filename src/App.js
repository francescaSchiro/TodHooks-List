import React, { useState, useReducer } from "react";
import uuid from 'uuid/v4';


import Filter from './components/Filter';


import DeleteIcon from '@material-ui/icons/Delete';
import AddBoxIcon from '@material-ui/icons/AddBox';
import IconButton from '@material-ui/core/IconButton';
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
    if (task.trim() === '') {
      alert('Sorry, you cannot add an empty todo!')
    } else {
      dispatchTodos({ type: 'ADD_TODO', payload: { id: uuid(), task } });
    }
    setTask('');
  };
  const handleChangeCheckbox = id => {
    dispatchTodos({ type: 'TOGGLE_TODO', payload: { id } });
  }



  const handleDeleteClick = id => {
    dispatchTodos({ type: 'DELETE_TODO', payload: { id } })
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
      <Filter dispatch={dispatchFilter} />

      {filteredTodos.map(todo => (
        <div className='listItemContainer' key={todo.id}>
          <label className='checkContainer'> {todo.task}
            <input
              type='checkbox'
              checked={todo.complete}
              onChange={() => handleChangeCheckbox(todo.id)}
            />
            <span className='checkmark' />
          </label>
          <IconButton onClick={() => handleDeleteClick(todo.id)} children={<DeleteIcon />
          } />
        </div>
      ))
      }

      <form onSubmit={handleSubmit}>
        <input type='text' value={task} onChange={handleChangeInput} placeholder='Type your next todo...' />
        <IconButton type='submit' children={<AddBoxIcon />} />
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