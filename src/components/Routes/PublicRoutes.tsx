import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import PropTypes from "prop-types";

const PublicRoute = ({ children }) => {
  const { isAuth } = useSelector(state => {
    return {
      isAuth: state.auth.token,
    };
  });

  const location = useLocation();

  return !isAuth ? children : <Navigate to={location.state ?? '/'} />;
};

PublicRoute.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
export default PublicRoute;