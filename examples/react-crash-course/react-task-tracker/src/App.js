// import React from 'react'    // Used if you want to use classes
import Header from './components/Header'
import HeaderThreeBtn from './components/HeaderThreeBtn'

const App = () => {
  // Task Tracker variable section
  const headerTitle = 'Task Tracker'
  const headerBtnText = 'Add'

  // Test area variable section
  const name_TEST = 'Brad';
  const headerTitle_TEST = 'TEST AREA'
  const btnText_1_TEST = 'Button 1 text'
  const btnText_2_TEST = 'Button 2 text'
  const btnText_3_TEST = 'Button 3 text'
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
    <div className="body">
      {/* Actual Task Tracker Section */}
      <div className='container'>
        <Header 
          headerBtnText={headerBtnText} 
          headerTitle={headerTitle} 
        />
      </div>


      {/* FAKEY TEST SECTION BELOW */}
      <div className='container'>
        <HeaderThreeBtn 
          title={headerTitle_TEST}
          btnText_1={btnText_1_TEST}
          btnText_2={btnText_2_TEST}
          btnText_3={btnText_3_TEST}
        />
        <HeaderThreeBtn />
        <h1>Hello From React</h1>  
        <h2>JSX expressions must have one parent element!</h2> 
        <p>So whatever you return has to be a single element.</p>
        <h1>Hello your name is now {name_TEST} and your id is: {1 + 1}</h1>
        {conditionalStatement}
      </div>

      
    </div>
  );
}

// // Here is an example of a class-based App, just for reference.
// class App extends React.Component {
//   render() {
//     return <h1>Hello from a class</h1>
//   }
// }


export default App;
