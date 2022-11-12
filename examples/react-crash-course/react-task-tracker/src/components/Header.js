import PropTypes from 'prop-types'
import Button from './Button'



// Allow people to give props to the components so they can be customized 
// const Header = ({ title }) => {      // This will also work, but I think it's harder to read
const Header = (props) => {
  // This is just here temporarily. We will move this later.
  const onClickFunction = () => {
    console.log('Click')
  }

  return (
    <header className='header'>
      <h1>{props.headerTitle}</h1>
      <Button 
        text={props.headerBtnText}
        onClick={onClickFunction}
      />
    </header>
  )
}

// We can set default props below the component
Header.defaultProps = {
  headerTitle: 'defaultProp Title',
  headerBtnText: 'defaultProp Btn Text',
}

Header.propTypes = {
  headerTitle: PropTypes.string.isRequired,
}

export default Header