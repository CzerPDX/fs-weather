// import { FaSearch } from 'react-icons/fa'
// import { useState } from 'react'
// import Button from './Btn'


  


// const LargeSearchBar = ({ onSearch }) => {
//   // AddTask component-level state
//   const [searchTerm, setSearchTerm] = useState('')
//   const searchIcon = <FaSearch />
//   // const searchIcon = 'hello'

  

//   // We do not want to call onSearch directly so we do the following
//   const onSubmit = (error) => {
//     error.preventDefault()      // Do not automatically go to a new page once submission happens.

//     // Validate the task "text" exists because it is required
//     if (!searchTerm) {
//       alert('No search term entered!')
//     }
//     else {
//       console.log(`searched for: ${searchTerm}`)
//       // Send the data for the new task to onSearch
//       // onSearch({ searchTerm })

//       // Eventually want to probably make a popunder component with the search results
//     }

//     // Clear the searchBox
//     setSearchTerm('')
//   }
//   // const searchIcon = <FaSearch />
//   // const searchIcon = 'hello'

//   return (
//     <div className='large-search-bar container'>
//       <form className='form-control' onSubmit={onSubmit}>
//         <label>Search City and State to view Weather</label>
//         <input 
//           className="form-control form-control-lg" 
//           type="text" 
//           placeholder="Enter location..." 
//           value={searchTerm} 
//           aria-label="Search box to enter weather location"
//           onChange={(changeEvent) => setSearchTerm(changeEvent.target.value)}
//         ></input>
//         <Button 
//           btnClasses='btn btn-primary' 
//           type='submit' 
//           text='Search Weather' 
//           icon={searchIcon}
//         />
//       </form>
//     </div>
//   )
// }

// export default LargeSearchBar