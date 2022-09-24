import Task from './Task';

function TaskList({ tasks }) {
  return (
    <div className="TaskList">
      <ul>
        {tasks.map(task => {
          return <Task key={task} task={task} />
        })}
      </ul>
    </div>
  );
}

export default TaskList;