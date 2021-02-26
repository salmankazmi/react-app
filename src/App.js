import './App.css';
import React from 'react';

import UserOutput from './components/user-output/UserOutput'
import UserInput from './components/user-input/UserInput';
import TaskList  from './components/task-list/TaskList';

class App extends React.Component {
  state = {
    userName1: 'Max',
    userName2: 'Manu'
  };

  nameChangeHandler(event) {
    this.setState({
      userName1: event.target.value
    })
  };

  render() {
    return (
      <div className="App">
        <TaskList />
      </div>
    );
  }
}

export default App;
