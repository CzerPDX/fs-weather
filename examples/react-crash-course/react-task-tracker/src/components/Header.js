import PropTypes from 'prop-types'



// Allow people to give props to the components so they can be customized 
// const Header = ({ title }) => {      // This will also work, but I think it's harder to read
const Header = ({ headerTitle } ) => {
  

  return (
    <header className='header'>
      <h1>{headerTitle}</h1>
    </header>
  )
}

// We can set default props below the component
Header.defaultProps = {
  headerTitle: 'defaultProp Title',
}

Header.propTypes = {
  headerTitle: PropTypes.string.isRequired,
}

export default Header