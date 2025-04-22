import { NavLink } from "react-router";
import css from "./AuthNav.module.css";

export const AuthNav = () => {
  return (
    <div className={css.el}>
      <NavLink className={css.link} to="/register">
        Register
      </NavLink>
      <NavLink className={css.link} to="/login">
        Log In
      </NavLink>
    </div>
  );
};