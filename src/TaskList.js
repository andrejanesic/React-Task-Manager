import Task from './Task';

function TaskList({ tasks }) {
  return (
    <div className="TaskList">
      <ul>
        {tasks.map(task => {
          <Task key={task} task={task} />
        })}
      </ul>
    </div>
  );
}

export default TaskList;