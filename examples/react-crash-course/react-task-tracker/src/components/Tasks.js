import { render } from '@testing-library/react'
import Task from './Task'

const TaskList = (props) => {
  if (props.tasks.length > 0) {
    return props.tasks.map((task) => (
      <Task 
        key={task.id} 
        task={task}
        onDelete={props.onDelete}
      />
    ))
  }
  else {
    return 'You have no tasks to show!'
  }
}


const Tasks = (props) => {
  
  return (
    <div>
      <TaskList 
        tasks={props.tasks}
        onDelete={props.onDelete}
      />
    </div>
  )
}

export default Tasks