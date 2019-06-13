import React from 'react';

const Filter = ({ dispatchFilter }) => {

    const handleShowAll = () => {
        dispatchFilter({ type: 'SHOW_ALL' });
    };
    const handleShowComplete = () => {
        dispatchFilter({ type: 'SHOW_COMPLETE' });
    };
    const handleShowIncomplete = () => {
        dispatchFilter({ type: 'SHOW_INCOMPLETE' });
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