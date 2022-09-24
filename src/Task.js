import { useRef } from 'react';

function Task({ task, taskUpdate }) {
  const nameRef = useRef();
  const descRef = useRef();
  const statusRef = useRef();

  function changeName() {
    taskUpdate(task.id, { name: nameRef.current.value });
  }

  function changeDescription() {
    taskUpdate(task.id, { description: descRef.current.value });
  }

  function changeStatus() {
    taskUpdate(task.id, { status: statusRef.current.value });
  }

  return (
    <div className="Task">
      <input type="text" ref={nameRef} value={task.name} onChange={changeName} />
      <textarea ref={descRef} value={task.description} onChange={changeDescription}></textarea>
      <select ref={statusRef} onChange={changeStatus} value={task.status}>
        {['Not set', 'To do', 'In progress', 'Complete'].map((val, index) => {
          return <option key={index} value={index}>{val}</option>
        })};
      </select>
    </div>
  );
}

export default Task;