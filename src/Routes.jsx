import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import SharedLayout from "./components/SharedLayout/SharedLayout.jsx";
import Loader from "./components/Loader/Loader.jsx";
// import PublicRoute from "./components/Routes/PublicRoutes.jsx";

const MainPage = lazy(() => import("./components/Pages/MainPage/MainPage.jsx"));
const CatalogPage = lazy(() => import("./components/Pages/CatalogPage/CatalogPage.jsx"));
const RegistrationPage = lazy(() => import("./components/Pages/RegistrationPage/RegistrationPage.jsx"));
const LoginPage = lazy(() => import("./components/Pages/LoginPage/LoginPage.jsx"));
const NotFoundPage = lazy(() => import("./components/Pages/NotFoundPage/NotFoundPage.jsx"));

const UserRoutes = () => {
  return (
    <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            path="/"
                element={
                // <PublicRoute>
                    <MainPage />              
                // </PublicRoute>
            }
            />
            <Route
          path="/signup"
          element={
            // <PublicRoute>
              <RegistrationPage />
            // </PublicRoute>
          }
            />
            <Route
          path="/login"
          element={
            // <PublicRoute>
              <LoginPage />
            // </PublicRoute>
          }
        />
          <Route
            path="/catalog/:page"
                      element={
                // <PublicRoute>
                   <CatalogPage />           
                // </PublicRoute>
            }
                  />
           {/* <Route
            path="/favorite/:page"
            element={
            <PrivateRoute>
                <FavoritePage />
            </PrivateRoute>
                
            }
          />  */}
          <Route
            path="*"
            element={
                <NotFoundPage />
            }
          />
        </Route>
      </Routes>
    </Suspense>
  );
};
export default UserRoutes;