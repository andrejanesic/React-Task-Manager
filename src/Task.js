import { useRef } from 'react';

function Task({ task, taskUpdate }) {
  const nameRef = useRef();
  const descRef = useRef();
  const statusRef = useRef();

  function update(e) {
    taskUpdate(task.id, {
      id: task.id,
      name: nameRef.current.value,
      description: descRef.current.value,
      status: statusRef.current.value,
    });
  }

  return (
    <div className="Task">
      <input type="text" ref={nameRef} value={task.name} onChange={update} />
      <textarea ref={descRef} value={task.description} onChange={update}></textarea>
      <select ref={statusRef} value={task.status} onChange={update}>
        {['Not set', 'To do', 'In progress', 'Complete'].map((val, index) => {
          return <option key={index} value={index}>{val}</option>
        })};
      </select>
    </div>
  );
}

export default Task;