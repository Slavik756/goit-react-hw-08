import { useSelector } from "react-redux";
import { NavLink } from "react-router";
import { selectIsLoggedIn } from "../../redux/auth/selector";
import css from "./Navigation.module.css";

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav className={css.nav}>
      <NavLink className={css.navLink} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={css.navLink} to="/contacts">
          Contact
        </NavLink>
      )}
    </nav>
  );
}