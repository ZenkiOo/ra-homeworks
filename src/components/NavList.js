import { Link } from "react-router-dom";

const navLink = (item) => (item.link === "/" ? "Home" : item.link);

const NavList = (props) => {
  const listItems = props.items.map((item, idx) => {
    return (
      <Link to={item.link} className="nav-links__link" key={idx}>
        {navLink(item)}
      </Link>
    );
  });

  return <nav className="nav-links">{listItems}</nav>;
};
export { NavList };
