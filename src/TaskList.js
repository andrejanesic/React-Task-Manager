import Task from './Task';

function TaskList({ tasks, taskUpdate, taskRemove }) {
  return (
    <div className="TaskList">
      {tasks.map(task => {
        return <Task
          key={task.id}
          task={task}
          taskUpdate={taskUpdate}
          taskRemove={taskRemove} />
      })}
    </div>
  );
}

export default TaskList;