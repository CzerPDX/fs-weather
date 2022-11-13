import { FaTimes } from 'react-icons/fa'

const Xbtn = ({ onClick }) => {
  return (
    <div className="redCircle">
      <FaTimes onClick={onClick}/>
    </div>
  )
}

export default Xbtn