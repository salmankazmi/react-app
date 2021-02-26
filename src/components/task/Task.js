import React from 'react';

const Task = (props) => {
    return (<div className='Task'>
        <p>{props.content}</p>
    </div>)
}

export default Task;