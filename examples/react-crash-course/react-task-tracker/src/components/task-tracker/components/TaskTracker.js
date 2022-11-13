import { useState } from 'react'
import Tasks from './TaskList'
import Header from '../../components/Header'

// **** REMEMBER ****
// "State gets passed down, Events get passed up"

// This is the component that manages each task tracker's state.
const TaskTracker = ({ taskData, headerTitle }) => {
  // Loads initial tasks into state
  const [tasks, setTasks] = useState(taskData)

  // Manage the task list's state
  
  // Add A Task
  const addTask = (task) => {
    console.log(task)
    // Usually the backend would handle assigning an ID, This is not a real solution for creating an id lol
    const id = Math.floor(Math.random() * 10000) + 1

    // Create the new task
    const newTask = {
      ...task,    // Copies existing data from the task object
      id: id      // Except id will be set to the id we generated above
    }
    
    // create an array that includes all existing tasks plus the new task on the end
    const newTaskList = [...tasks, newTask]
    // Send the new task list to be updated with setTasks
    setTasks(newTaskList)
  }

  // Delete Task
  const deleteTask = (id) => {
    // Filter out the id you don't want of existing tasks and save that filtered version as a new task list
    const newTaskList = tasks.filter((task) => task.id !== id )
    // Send the new task list to be updated with setTasks
    setTasks(newTaskList)
  }

  // Toggle a Task's Reminder Setting
  const toggleReminder = (id) => {
    // Create a new task list that copies all the tasks over, but changes the reminder on the target task
    const updatedReminderTaskList = tasks.map((task) => {
      let returnTask
      // If this task is the one we want to update
      if (task.id === id) {
        // Create a new task with the reminder setting inverted
        returnTask = {
          ...task,                    // copies all of the existing fields in task
          reminder: !task.reminder    // Opposite of the current value
        }
      }
      // Otherwise this is a task we do not want to change
      else {
        // So just return the original task
        returnTask = task
      }
      return returnTask
    })
    // Send the new task list to be updated with setTasks
    setTasks(updatedReminderTaskList)
  }


  return (
    <div className='container'>
      <Header 
        headerTitle={headerTitle}
      />
      <Tasks 
          tasks={tasks}
          onDelete={deleteTask}
          onToggle={toggleReminder}
          onAdd={addTask}
        />
    </div>
  )
}

export default TaskTracker