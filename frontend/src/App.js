import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Main from './Pages/Main/Main';
import NoValidRoute from './Pages/NoValidRoute/NoValidRoute';
import Ruben from './Pages/Ruben/Ruben';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path="*" element={<NoValidRoute />} />
      </Routes>
    </Router>
  );
}

export default App;
