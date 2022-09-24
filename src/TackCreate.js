import { useState, useRef } from "react";
import Task from "./Task";
import Button from "react-bootstrap/Button";

function TaskCreate({ taskCreate }) {
  const blank = {
    id: -1,
    name: '',
    description: '',
    status: '',
  };

  const parentRef = useRef();
  const cancelRef = useRef();
  const createRef = useRef();
  const toggleRef = useRef();
  const [task, setTask] = useState(blank);

  function save(id, data) {
    setTask(data);
  }

  async function create(e) {
    if (!toggleRef.current) {
      parentRef.current.style = "display: block;";
      cancelRef.current.style = '';
      createRef.current.innerText = "Save task";
      toggleRef.current = !toggleRef.current;
    } else {
      await taskCreate(task);
      await setTask(blank);
    }
  }

  async function cancel(e) {
    if (!toggleRef.current) return;
    await setTask(blank);
    parentRef.current.style = "display: none;";
    cancelRef.current.style = "display: none;";
    createRef.current.innerText = "New task";
    toggleRef.current = !toggleRef.current;
  }

  return (
    <div className="TaskCreate">
      <div ref={parentRef} className="mb-3" style={{ display: 'none' }}>
        <Task task={task} taskUpdate={save} />
      </div>
      <div className="d-flex w-100 flex-row-reverse justify-content-between">
        <Button ref={createRef} variant="primary" onClick={create}>New task</Button>
        <Button ref={cancelRef} variant="outline-secondary" onClick={cancel} style={{ display: 'none' }}>Cancel</Button>
      </div>
    </div>
  );
}

export default TaskCreate;