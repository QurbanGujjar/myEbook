import Home from '../../pages/Home';
import Login from '../../pages/login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const CustomRoute = () => {
    const routes = [
        {
          path: "/",
          exact: true,
          Component:<Home/>
        },
        {
          path: "/login",
          exact: true,
          Component:<Login/>
        },
      ];
  return (
    <Routes>
    {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={route.Component}
            />
          ))}
    </Routes>
  )
}

export default CustomRoute
