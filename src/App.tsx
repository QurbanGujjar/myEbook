import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Error_Page from './pages/error_page';
import Login from './pages/login';
function App() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/" element={<Login />} />
        <Route path="*" element={<Error_Page />}/>
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
