import { useState } from 'react';
import TaskList from "./TaskList";
import TaskManager from "./TaskManager";

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <div className="App">
      <TaskList tasks={tasks}/>
      <TaskManager />
    </div>
  );
}

export default App;
