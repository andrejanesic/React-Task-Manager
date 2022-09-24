import Task from './Task';

function TaskList({ tasks }) {
  return (
    <div className="TaskList">
      {tasks.map(task => {
        return <Task key={task} task={task} />
      })}
    </div>
  );
}

export default TaskList;