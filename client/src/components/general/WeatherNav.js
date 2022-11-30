import { useState } from 'react';
const WeatherNav = ({ setCard }) => {
  const links = [
    { card: 'main-large', id: 'nav-current', text: 'Current' },
    { card: 'hourly-forecast', id: 'nav-hourly', text: 'Hourly' },
    { card: 'daily-forecast', id: 'nav-daily', text: 'Daily' },
  ];
  const [active, setActive] = useState('nav-current');
  const handleClick = (card, id) => {
    setActive(id);
    setCard(card);
  };
  const button = 'btn border-0';
  const navLinks = links.map((link) => {
    let outterClass = 'd-flex justify-content-center ';
    if (link.id === active) {
      outterClass += 'nav-active';
    }
    return (
      <div key={`${link.id}-${link.card}`} id={link.id} className={outterClass}>
        <button
          className={button}
          onClick={() => handleClick(link.card, link.id)}
        >
          <h5 className="nav-header-text">{link.text}</h5>
        </button>
      </div>
    );
  });

  return (
    <div className="container card  shadow my-2">
      <div className="d-flex justify-content-around px-5">{navLinks}</div>
    </div>
  );
};
export default WeatherNav;
