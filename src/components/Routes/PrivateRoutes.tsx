import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
  const {isAuth} = useSelector(state => {
    return {
        isAuth: state.auth.token
    }
  });

  return isAuth ? children : <Navigate to="/" />;
};

PrivateRoute.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default PrivateRoute;