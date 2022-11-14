// General app headers
const Header = ({ headerTitle, headerClasses }) => {

  return (
    <header className={headerClasses}>
      {headerTitle}
    </header>
  )
}

// We can set default props below the component
Header.defaultProps = {
  headerTitle: 'FS Weather',
  headerClasses: 'header',
}

export default Header