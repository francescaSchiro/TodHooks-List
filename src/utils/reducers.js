// reducer returns state filter new value. (default: 'ALL')
export const filterReducer = (state, action) => {
    switch (action.type) {
        case 'SHOW_ALL':
            return 'ALL';
        case 'SHOW_COMPLETE':
            return 'COMPLETE';
        case 'SHOW_INCOMPLETE':
            return 'INCOMPLETE';
        default:
            throw new Error();
    }
};

// reducer returns state todos new value. (default: initialTodos)
export const todoReducer = (state, action) => {
    switch (action.type) {
        case 'TOGGLE_TODO':
            return state.map(todo => {
                if (todo.id === action.payload.id) {
                    return { ...todo, complete: !todo.complete };
                } else {
                    return todo;
                }
            });

        case 'ADD_TODO':
            return state.concat({
                task: action.payload.task,
                id: action.payload.id,
                complete: false,
            })
        default:
            throw new Error();
    }
};