import React, { useState, useContext } from 'react';
import uuid from 'uuid/v4';

import AddBoxIcon from '@material-ui/icons/AddBox';
import IconButton from '@material-ui/core/IconButton';
import { TodoContext } from '../../containers/TodoApp/context';


const AddTodo = () => {
    const dispatch = useContext(TodoContext)

    const [task, setTask] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if (task.trim() === '') {
            alert('Sorry, you cannot add an empty todo!')
        } else {
            dispatch({ type: 'ADD_TODO', 
            payload: { id: uuid(), task } });
        }
        setTask('');
    };

    const handleChangeInput = e => {
        setTask(e.target.value);
    };

    return (
        <form onSubmit={handleSubmit} className='add-text-form'>
            <input 
                placeholder='Type your next todo...' 
                type='text' 
                value={task} 
                onChange={handleChangeInput} 
            />
            <IconButton type='submit' children={<AddBoxIcon />} />
        </form>
    )
};

export default AddTodo;