import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Auth/Login';
import GoogleCallBack from './Pages/Auth/GoogleCallBack';
import Home from './Pages/Website/HomePage';
import Register from './Pages/Auth/Register';
import Users from './Pages/Dashboard/Users';
import Dashboard from './Pages/Dashboard/Dashboard';
import RequireAuth from './Pages/Auth/RequireAuth';
import NotFound from './Pages/Website/NotFound';
import User from './Pages/Dashboard/User';

function App() {
  return (
    <>
    
    <Routes>
      {/* public Routes  */}
      <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='auth/google/callback' element={<GoogleCallBack />} />
          {/* protected Routes */}
          <Route element={<RequireAuth />} >
          <Route path='/dashboard' element={<Dashboard />}>
          <Route path='users' element={<Users />} />
          <Route path='users/:id' element={<User />} />
          <Route path='notfound' element={<NotFound />} />
          </Route>
          </Route>
          </Routes>
    </>
  );
}

export default App;
