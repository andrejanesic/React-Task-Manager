import Task from './Task';

function TaskList({ tasks, taskUpdate, taskRemove }) {
  return (
    <div className="TaskList">
      {tasks.map(task => {
        return (<div className="mb-4">
          <Task
          key={task.id}
          task={task}
          taskUpdate={taskUpdate}
          taskRemove={taskRemove} />
        </div>);
      })}
    </div>
  );
}

export default TaskList;