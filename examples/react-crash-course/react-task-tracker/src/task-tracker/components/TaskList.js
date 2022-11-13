import Task from './Task'
import AddTask from './AddTask'
import { useState } from 'react'
import Button from './Button'

// Show or hide the task form.
const ShowHideAddTaskForm = ({ addTask, showAddTask, onClickFunction }) => {
  if(showAddTask) {
    return (
      <div className='add-task-wrapper'>
        <Button 
          text='Hide Add Task'
          onClick={onClickFunction}
        />
        <AddTask onAdd={addTask} />
      </div>
    )
  }
  else {
    return (
      <div className='add-task-wrapper'>
        <Button 
          text='Add Task'
          onClick={onClickFunction}
        />
      </div>
    )
  }
}

// Tasklist handling for empty and non-empty taskLists
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


const Tasks = ({ tasks, onDelete, onToggle, onAdd }) => {
  const [showAddTask, setShowAddTask] = useState(false)    // Whether or not we show the add task form
  
  // 
  const onClickFunction = () => {
    console.log('Click')
    setShowAddTask(!showAddTask)
  }

  
  return (
    <div>
      <ShowHideAddTaskForm 
        addTask={onAdd} 
        showAddTask={showAddTask}
        onClickFunction={onClickFunction}
      />
      <TaskList 
        tasks={tasks}
        onDelete={onDelete}
        onToggle={onToggle}
      />
    </div>
  )
}

export default Tasks