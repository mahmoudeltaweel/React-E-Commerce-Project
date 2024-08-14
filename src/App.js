import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Auth/Login';
import Home from './Pages/Website/HomePage';

function App() {
  return (
    <>
    
    <Routes>
      <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          </Routes>
    </>
  );
}

export default App;
