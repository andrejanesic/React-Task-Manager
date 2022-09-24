import { useState, useRef } from 'react';
import TaskList from "./TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const taskNameRef = useRef();

  function createTask(e) {
    const name = taskNameRef.current.value;
    if (!name) return;
    console.log(name);
    setTasks(prevTodos => {
      return [...prevTodos, {
        id: 1,
        name: name,
        description: '',
        status: '',
      }];
    });
    taskNameRef.current.value = null;
  }

  return (
    <div className="App">
      <TaskList tasks={tasks} />
      <div>
        <input ref={taskNameRef} type="text"/>
        <button onClick={createTask}>Add task</button>
        <button>Clear complete</button>
        <div>0 left to do</div>
      </div>
    </div>
  );
}

export default App;
