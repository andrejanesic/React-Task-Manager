import { useState } from "react";
import Task from "./Task";

function TaskCreate({ taskCreate }) {
  const blank = {
    id: -1,
    name: '',
    description: '',
    status: '',
  };
  const [task, setTask] = useState(blank);

  function save(id, data) {
    setTask(data);
  }

  async function create(e) {
    await taskCreate(task);
    await setTask(blank);
  }

  return (
    <div className="TaskCreate">
      <Task task={task} taskUpdate={save} />
      <button onClick={create}>Create task</button>
    </div>
  );
}

export default TaskCreate;