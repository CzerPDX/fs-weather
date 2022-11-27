import 'bootstrap/js/src/collapse.js';
const WeatherNav = ({ setCard }) => {
  const handleClick = (card) => {
    console.log('click', card);
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <button
                className="nav-item active border-0"
                onClick={() => handleClick('main-large')}
                aria-current="page"
              >
                Current
              </button>
              <button
                className="nav-item border-0"
                onClick={() => handleClick('hourly-forecast')}
              >
                Hourly
              </button>
              <button
                className="nav-item border-0"
                onClick={() => handleClick('daily-forecast')}
              >
                Daily
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default WeatherNav;
