import Task from './Task'

// Used by Tasks
const TaskList = ({ tasks, onDelete, onToggle }) => {
  if (tasks.length > 0) {
    return tasks.map((task) => (
      <Task 
        key={task.id} 
        task={task}
        onDelete={onDelete}
        onToggle={onToggle}
      />
    ))
  }
  else {
    return 'You have no tasks to show!'
  }
}


const Tasks = ({ tasks, onDelete, onToggle }) => {
  
  return (
    <div>
      <TaskList 
        tasks={tasks}
        onDelete={onDelete}
        onToggle={onToggle}
      />
    </div>
  )
}

export default Tasks