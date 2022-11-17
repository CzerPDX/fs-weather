import logo from './logo.svg';
import './App.css';


// Example using another component to hold/resolve the logic
const SubComponentForApp = ({ hello }) => {
  let returnHTML

  if (hello) {
    returnHTML = <div>hello from component</div>
  }
  else {
    returnHTML = <div>goodbye from component</div>
  }
  return returnHTML
}

// Main component (just happens to be App but every ComponentFile.js will generally have at least one "main" one)
const App = () => {
  let hello = false

  // Example using an inner function to hold/resolve the logic
  const test = ((hello) => {
    let returnHTML

    if (hello) {
      returnHTML = <div>hello from inner function</div>
    }
    else {
      returnHTML = <div>goodbye from inner function</div>
    }

    return returnHTML
  })
  

  // Then we only call the results in the return for the main component
  return (
    <div>
      {/* calls the function version in the return  */}
      {test(hello)}

      {/* calls the component verison in the return, giving it a prop of hello=true */}
      <SubComponentForApp hello={true} />
    </div>
  );
}

export default App;
