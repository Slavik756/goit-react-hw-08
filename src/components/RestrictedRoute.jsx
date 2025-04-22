import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selector";
import { Navigate } from "react-router";

export default function RestrictedRoute({ component, redirectTo }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : component;
}