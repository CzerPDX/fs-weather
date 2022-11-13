import { useState } from 'react'




const AddTask = ({ onAdd }) => {
  // AddTask component-level state
  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)

  

  // We do not want to call onAdd directly so we do the following
  const onSubmit = (error) => {
    error.preventDefault()      // Do not automatically go to a new page once submission happens.

    // Validate the task "text" exists because it is required
    if (!text) {
      alert('Please add a task')
    }
    else {
      // Send the data for the new task to onAdd
      onAdd({ text, day, reminder })

      // Clear the form
      setText('')
      setDay('')
      setReminder(false)
    }
  }

  return (
    <div className='add-task-wrapper'>
      <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
          <label>Task</label>
          <input 
            type='text' 
            placeholder='Add Task' 
            value={text} 
            // Get the new value whenever someone updates the "Task" text
            onChange={(changeEvent) => setText(changeEvent.target.value)}
          />
        </div>
        <div className='form-control'>
          <label>Day & Time</label>
          <input 
            type='text' 
            placeholder='Add Day & Time' 
            value={day} 
            // Get the new value whenever someone updates the "Day & Time" text
            onChange={(changeEvent) => setDay(changeEvent.target.value)}
          />
        </div>
        <div className='form-control form-control-check'>
          <label>Set Reminder</label>
          <input 
            type='checkbox' 
            checked={reminder}    // Will set its checked value based on the value of "reminder"
            value={reminder} 
            // Get the new value whenever someone updates the "Reminder" checkbox
            onChange={(changeEvent) => setReminder(changeEvent.currentTarget.checked)}
          />
        </div>

        <input type='submit' value='Save Task' className='btn btn-block' />
      </form>
    </div>
  )
}

export default AddTask