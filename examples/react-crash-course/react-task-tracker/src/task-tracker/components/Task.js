// Task.js is for Managing the display of an individual task

import Xbtn from '../../components/Xbtn'


const Task = ({ task, onDelete, onToggle }) => {
  // Handle Reminders
  let addReminder = '';
  // If the task has reminders on
  if (task.reminder) {
    // Set addReminder so it adds the class onto the div
    addReminder = 'reminder'
  }

  return (
    <div 
      className={`task ${addReminder}`} 
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.text} 
        <Xbtn 
          onDelete={onDelete}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  )
}

export default Task