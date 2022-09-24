import { useState } from 'react';
import TaskList from "./TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <div className="App">
      <TaskList tasks={tasks} />
      <div>
        <input />
        <button>Add task</button>
        <button>Clear complete</button>
        <div>0 left to do</div>
      </div>
    </div>
  );
}

export default App;
