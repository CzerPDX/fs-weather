import React, { useEffect, useState } from 'react'


function App() {

  const [backendData, setBackendData] = useState([{}])

  // Now fetch the backend API
  useEffect(() => {
    // We don't have to write out "localhost:5001/api" because we defined it as "proxy" in client/package.json
    fetch('/api')
    
    // Get the response and then translate it to JSON format
    .then((response) => 
      response.json()
    )

    // Then send the data to the setBackendData variable
    .then((data) => {
      setBackendData(data)
    })
    // We pass in an empty array below "so that this only runs on the first render of the component"
  }, [])


  return (
    <div>

      {(typeof backendData.users === 'undefined') ? (
        <p>Loading...</p>
      ) : (
        backendData.users.map((user, i) =>  (
          <p key={i}>{user}</p>
        ))
      )}

    </div>
  )
}

export default App