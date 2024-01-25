import "./Header.css";

const Header = ({ cabeza }) => {
  return (
    <div className="header">
      <div className="logo">
        <img src={cabeza.logo.img} alt="logo" />
      </div>
      <div className="enlaces">
        {cabeza.links.map((item, index) => (
          <div key={index}>
            <a href={item.url} target="_blank">
              {item.text}
            </a>
          </div>
        ))}
      </div>
      <div className="menu">
        {cabeza.menu.map((item, index) => (
          <div key={index}>
            <a href={item.url} target="_blank">
              {item.text}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
