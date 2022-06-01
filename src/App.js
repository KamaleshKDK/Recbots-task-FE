import { Route, Routes, Navigate } from 'react-router-dom'
import Main from './components/Main/Cart';
import Signup from './components/SignUp';
import Login from './components/Login';
import Cart from './components/Main/Cart';
import RegisterForm from './components/Main/RegisterForm';



function App() {
  const user = localStorage.getItem("token");
  return (
    <>
      <Routes>
        {user && < Route path='/dashboard' element={<Cart />} />}
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Login />} />
        <Route path="/registerform" element={<RegisterForm />} />
        <Route path="/dashboard" element={<Cart/>}/>
      </Routes>

     
    </>

  );
}

export default App;
