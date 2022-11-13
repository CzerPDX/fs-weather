// Manages bringing the data in for each task tracker and also manages the number of Task Trackers in the app

// Task tracker imports
import TaskTracker from './components/TaskTracker'
// Load data for each task tracker
import taskData from './task-data/taskData.json';  
import taskData2 from './task-data/taskData2.json';  

// Create a TaskTracker component for each task tracker in the app
const TaskTrackerApp = () => {
  return (
    <div className="body">
      <TaskTracker 
        taskData={taskData} 
        headerTitle='Task Tracker #1'
      />
      <TaskTracker 
        taskData={taskData2} 
        headerTitle='Task Tracker #2'
      />
      <TaskTracker 
        taskData={taskData2} 
        headerTitle='Task Tracker #3'
      />
    </div>
  )
}

export default TaskTrackerApp