
const InputField = ({ id, labelText, onChange, className, value, type, invalidText }) => {

  return (
    <div className='mb-3'>
      <label 
        htmlFor={id} 
        className='form-label'
      >{labelText}</label>
      <input 
        onChange={onChange} 
        className={className}
        value={value} 
        type={type}
        id={id}
        required
      />
      <div className='invalid-feedback'>
        {invalidText}
      </div>
    </div>
  )
}

export default InputField