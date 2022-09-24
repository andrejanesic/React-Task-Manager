import { useState } from 'react';
import TodoList from "./TodoList";
import TodoManager from "./TodoManager";

function App() {
  const [tasks, setTasks] = useState([]);
  
  return (
    <div className="App">
      <TodoList />
      <TodoManager />
    </div>
  );
}

export default App;
