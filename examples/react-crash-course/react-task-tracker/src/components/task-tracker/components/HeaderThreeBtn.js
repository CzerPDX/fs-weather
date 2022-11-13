import PropTypes from 'prop-types'
import Button from './Button'

// Allow people to give props to the components so they can be customized 
// const Header = ({ title }) => {      // This will also work, but I think it's harder to read
const Header = (props) => {
  return (
    <header className='header'>
        {/* <h1 style={cssInJsExample}>{props.title}</h1> */}
        <h1>{props.title}</h1>
        <Button extraClasses='btn1' text={props.btnText_1} />
        <Button extraClasses='btn2' text={props.btnText_2} />
        <Button extraClasses='btn3' text={props.btnText_3} />
        {/* <h2>{props.h2Title}</h2> */}
        
    </header>
  )
}

// We can set default props below the component
Header.defaultProps = {
    title: 'Task Tracker Default Prop Title',
    h2Title: 'default h2 title info',
    btnText_1: 'Btn 1 default',
    btnText_2: 'Btn 2 default',
    btnText_3: 'Btn 3 default',
}

// We can use PropTypes to set datatypes for our props
// If someone tries to pass in the wrong kind of property it will error, though it does still render.
// We made title required so you MUST enter the title in order to use the header.
Header.propTypes = {
    title: PropTypes.string.isRequired,
    h2Title: PropTypes.string,
}

// // CSS from the Header.js file example
// const cssInJsExample = {
//   color: 'red',
//   backgroundColor: 'black', // Note that we use camel case here instead of background-color like normal!!!
// }

export default Header