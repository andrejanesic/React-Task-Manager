import { useState, useRef, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TaskCreate from './TackCreate';
import TaskList from "./TaskList";

// storage keys
const LOCAL_STORAGE_KEY = 'reactSampleApp.tasks';

function App() {
  const [tasks, setTasks] = useState([]);
  const taskNameRef = useRef();

  // load items
  useEffect(() => {
    try {
      const storedTasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
      console.log('stored tasks:');
      console.log(storedTasks);
      if (storedTasks) setTasks(storedTasks);
    } catch (e) {
      console.log(e);
    }
  }, [])

  // save tasks in local storage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks))
  }, [tasks]);

  function taskCreate(task) {
    if (!task.name || !task.status) return;
    setTasks(prevTasks => {
      return [...prevTasks, {
        id: uuidv4(),
        name: task.name,
        description: task.description,
        status: task.status,
      }];
    });
  }

  function taskUpdate(id, delta) {
    const newTasks = [...tasks];
    const task = newTasks.find(t => t.id === id);
    if (!task) {
      console.log(`Task not found: ${id}`);
      return;
    }

    Object.keys(delta).forEach(k => {
      task[k] = delta[k];
    });
    setTasks(newTasks);
  }

  function taskRemove(id) {
    const newTasks = [...tasks].filter(t => t.id !== id);
    setTasks(newTasks);
  }

  return (
    <div className="App">
      <div>
        <TaskCreate taskCreate={taskCreate}/>
        <div>0 left to do</div>
      </div>
      <TaskList
        tasks={tasks}
        taskUpdate={taskUpdate}
        taskRemove={taskRemove} />
    </div>
  );
}

export default App;
