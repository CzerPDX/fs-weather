import PropTypes from 'prop-types'

// Allow people to give props to the components so they can be customized 
// const Header = ({ title }) => {      // This will also work, but I think it's harder to read
const Header = (props) => {
  return (
    <header>
        <h1>{props.title}</h1>
        <h2>{props.h2Title}</h2>
    </header>
  )
}

// We can set default props below the component
Header.defaultProps = {
    title: 'Task Tracker Default Prop Title',
    h2Title: 'default h2 title info'
}

// We can use PropTypes to set datatypes for our props
// If someone tries to pass in the wrong kind of property it will error, though it does still render
Header.propTypes = {
    title: PropTypes.string.isRequired,
    h2Title: PropTypes.string,
}

export default Header