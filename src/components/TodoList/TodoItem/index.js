import React from 'react';

import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';



const TodoItem = ({ dispatch, todo }) => {

    const handleChangeCheckbox = () => {
        dispatch({ type: 'TOGGLE_TODO', payload: { id: todo.id } });
    };
    const handleDeleteClick = () => {
        dispatch({ type: 'DELETE_TODO', payload: { id: todo.id } })
    };

    return (
        <div className='listItemContainer'>
            <label className='checkContainer'> {todo.task}
                <input
                    type='checkbox'
                    checked={todo.complete}
                    onChange={handleChangeCheckbox}
                />
                <span className='checkmark' />
            </label>
            <IconButton onClick={handleDeleteClick} children={<DeleteIcon />
            } />
        </div>
    )
};

export default TodoItem;