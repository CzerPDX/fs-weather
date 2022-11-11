// import React from 'react'    // Used if you want to use classes
import Header from './components/Header'

const App = () => {
  const name = 'Brad';
  const propHeaderTitle = 'Task Tracker Prop Title'
  let conditionalStatement;
  let conditionalRendering = false;

  if (conditionalRendering) {
    conditionalStatement = <h2>conditionalRendering is TRUE.</h2>;  
  }
  else {
    conditionalStatement = <h2>conditionalRendering is FALSE.</h2>
  }


  // This is the root App component. Everything displayed at localhost:3000 is displayed here.
  // className='blah' is used when you want to set the html attribute class='blah' 
  // htmlFor='blah' is used when you want to set the html attribute for='blah'
  return (
    <div className="container">
      <Header title={propHeaderTitle} />
      <Header />
      <h1>Hello From React</h1>  
      <h2>JSX expressions must have one parent element!</h2> 
      <p>So whatever you return has to be a single element.</p>
      <h1>Hello your name is now {name} and your id is: {1 + 1}</h1>
      {conditionalStatement}
    </div>
  );
}

// // Here is an example of a class-based App
// class App extends React.Component {
//   render() {
//     return <h1>Hello from a class</h1>
//   }
// }


export default App;
