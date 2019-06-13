import React from 'react';

const Filter = ({ dispatch }) => {

    const handleShowAll = () => {
        dispatch({ type: 'SHOW_ALL' });
    };
    const handleShowComplete = () => {
        dispatch({ type: 'SHOW_COMPLETE' });
    };
    const handleShowIncomplete = () => {
        dispatch({ type: 'SHOW_INCOMPLETE' });
    };
    return (
        <div id='filters'>
            <button className='buttonFilter' type='button' onClick={handleShowAll}>All</button>
            <button className='buttonFilter' type='button' onClick={handleShowComplete}>Complete</button>
            <button className='buttonFilter' type='button' onClick={handleShowIncomplete}>Incomplete</button>
        </div>
    )
};

export default Filter;