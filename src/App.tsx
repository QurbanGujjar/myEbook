import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/login';
function App() {
  const routes = [
    {
      path: "/home",
      exact: true,
      Component:<Home/>
    },
    {
      path: "/",
      exact: true,
      Component:<Login/>
    },
  ];
  return (
    <div>
      <Routes>
      {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={route.Component}
                // children={<route.sidebar />}
              />
            ))}
      </Routes>
    </div>
  );
}
function Wrapped() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default Wrapped;
