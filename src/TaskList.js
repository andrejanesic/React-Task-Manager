import Task from './Task';

function TaskList({ tasks, taskUpdate }) {
  return (
    <div className="TaskList">
      {tasks.map(task => {
        return <Task
          key={task.id}
          task={task}
          taskUpdate={taskUpdate} />
      })}
    </div>
  );
}

export default TaskList;