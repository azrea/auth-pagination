import { Navigate } from "react-router-dom";
//this is a function that handles a protected route by checking your auth condition which is passed down as a route and then redirecting you to another address, which is also passed down  as a route, once the auth fails.
function RequireAuth({ children, redirectAddress, isAuthenticated }) {
  return isAuthenticated ? children : <Navigate to={redirectAddress} />;
}

export default RequireAuth;
