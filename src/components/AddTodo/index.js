import React, { useState } from 'react';
import uuid from 'uuid/v4';


import AddBoxIcon from '@material-ui/icons/AddBox';
import IconButton from '@material-ui/core/IconButton';



const AddTodo = ({ dispatch }) => {
    const [task, setTask] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if (task.trim() === '') {
            alert('Sorry, you cannot add an empty todo!')
        } else {
            dispatch({ type: 'ADD_TODO', payload: { id: uuid(), task } });
        }
        setTask('');
    };

    const handleChangeInput = e => {
        setTask(e.target.value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' value={task} onChange={handleChangeInput} placeholder='Type your next todo...' />
            <IconButton type='submit' children={<AddBoxIcon />} />
        </form>
    )
};

export default AddTodo;