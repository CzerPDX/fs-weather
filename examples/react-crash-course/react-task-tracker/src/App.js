// import React from 'react'    // Used if you want to use classes
import { useState } from 'react'
import taskData from './taskData.json';  // Global State original source: An array of JSON objects, each of which is a task
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

const App = () => {
  // This program uses global state
  /*
    tasks:              the current piece of state (ie, one of the JSON objects in taskData)
    setTasks:           Used to change the data. We can't use like tasks.push() to add a new object
                        because state is immutable. All changes create a new state object from scratch.
                        We do that through setTasks.
    useState(taskData): This is where we feed in the task objects. Here I am using an imported file.
                        The file is formatted as an array of JSON objects and was imported above.
                        Would need to write something that could save back out the data.
  */
  const [tasks, setTasks] = useState(taskData)

  // Add A Task
  const addTask = (task) => {
    console.log(task)
    // Usually the backend would handle assigning an ID, so we will just assign a random number
    // This is not a real solution for creating an id lol
    const id = Math.floor(Math.random() * 10000) + 1
    // Create the new task
    const newTask = {
      ...task,
      id: id
    }
    // Now that we have the new task, create an array that contains all of the current tasks (using ...tasks)
    // and add the newTask onto the end.
    const newTaskArray = [...tasks, newTask]
    setTasks(newTaskArray)
  }
  
  // Delete Task
  const deleteTask = (id) => {
    console.log('delete', id)

    // First filter out the id you don't want
    const newTaskList = tasks.filter((task) => task.id !== id )
    setTasks(newTaskList)
  }

  // Toggle Reminder
  /*
    Double-clicking a task in the list will set the 'reminder' field of the task data to the opposite of
    whatever it is currently set to.
      - If 'reminder' is "true" it will render with a green border.
  */
  const toggleReminder = (id) => {
    // console.log(id)
    const updatedReminderTaskList = tasks.map((task) => {
      let returnTask
      if (task.id === id) {
        returnTask = {
          ...task,                    // copies all of the existing fields in task
          reminder: !task.reminder    // Opposite of the current value
        }
      }
      else {
        returnTask = task
      }
      return returnTask
    })
    setTasks(updatedReminderTaskList)
  }

  // This is the root App component. Everything displayed at localhost:3000 is displayed here.
  // className='blah' is used when you want to set the html attribute class='blah' 
  // htmlFor='blah' is used when you want to set the html attribute for='blah'
  return (
    <div className="body">
      {/* Actual Task Tracker Section */}
      <div className='container'>
        <Header 
          headerBtnText='Add'
          headerTitle='Task Tracker'
        />
        <AddTask onAdd={addTask} />
        <Tasks 
          tasks={tasks}
          onDelete={deleteTask}
          onToggle={toggleReminder}
        />
      </div>
    </div>
  );
}

export default App;
