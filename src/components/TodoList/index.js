import React from 'react';

import TodoItem from './TodoItem';


const TodoList = ({ dispatch, todos }) => {




    return (
        <>
            {
                todos.map(todo => (
                    <TodoItem key={todo.id} dispatch={dispatch} todo={todo} />
                ))
            }
        </>
    )

};

export default TodoList;