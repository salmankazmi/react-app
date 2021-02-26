import React from 'react';

import Task from '../task/Task';

export default class TaskList extends React.Component {
    state = {
        taskList: [
            { id: 'abc1', title: 'Task1', content: 'Buy Groceries' }
        ]
    };

    render() {
        return (
            <div className='TaskList'>
                {this.state.taskList.map(task => {
                    return (
                        <Task key={task.id} content={task.content} />
                    )
                })}
            </div>
        )
    }
}