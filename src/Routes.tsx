import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import SharedLayout from "./components/SharedLayout/SharedLayout";
import Loader from "./components/Loader/Loader";
// import PublicRoute from "./components/Routes/PublicRoutes.tsx";

const MainPage = lazy(() => import("./components/Pages/MainPage/MainPage"));
const CatalogPage = lazy(() => import("./components/Pages/CatalogPage/CatalogPage"));
const RegistrationPage = lazy(() => import("./components/Pages/RegistrationPage/RegistrationPage"));
const LoginPage = lazy(() => import("./components/Pages/LoginPage/LoginPage"));
const NotFoundPage = lazy(() => import("./components/Pages/NotFoundPage/NotFoundPage"));

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