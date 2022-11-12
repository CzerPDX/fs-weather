import Xbtn from './Xbtn'

const Task = ({ task, onDelete }) => {
  return (
    <div className='task'>
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