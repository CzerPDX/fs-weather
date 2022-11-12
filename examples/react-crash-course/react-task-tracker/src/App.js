// import React from 'react'    // Used if you want to use classes
import { useState } from 'react'
import taskData from './taskData.json';  // Global State original source: An array of JSON objects, each of which is a task
import Header from './components/Header'
import Tasks from './components/Tasks'

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
  
  // Delete Task
  const deleteTask = (id) => {
    console.log('delete', id)

    // First filter out the id you don't want
    const newTaskList = tasks.filter((task) => task.id !== id )
    setTasks(newTaskList);
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
        <Tasks 
          tasks={tasks}
          onDelete={deleteTask}
        />
      </div>
    </div>
  );
}

export default App;
