function Task({ task }) {
  return (
    <div className="Task">
      <label>{task.name}</label>
      <input type="text" value={task.description} />
      <select>
        {['Not set', 'To do', 'In progress', 'Complete'].map((val, index) => {
          return <option value={index} selected={task.status == index}>{val}</option>
        })};
      </select>
    </div>
  );
}

export default Task;