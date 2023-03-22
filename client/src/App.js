
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import Accessoires from './components/Accessoires';
import Contact from './components/Contact';
import Logi from './components/Logi';
import Profil from './components/Profil';
import Register from './components/Register';
import { userCurrent } from './JS/userSlice/userSlice';
import PrivateRoute from './Routes/PrivateRouter';
import Navbar from './components/Navbar';
import { getproduct } from './JS/productslice';

import 'bootstrap/dist/css/bootstrap.min.css';
import { commandeget } from './JS/commandeSlice';
import Home from './components/Home';
import Header from './components/Header';




function App() {
  const isAuth = localStorage.getItem("token");
  const [ping, setping] = useState("");
  const dispatch = useDispatch()
  useEffect(() => {

    dispatch(userCurrent());
    dispatch(getproduct());
    dispatch(commandeget())

  }, [ping])
  return (
    <div className="App">

      {/* <Navbar /> */}
      <Header />


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path='/cart' element={<Cart ping={ping} setping={setping} />} />
        <Route path='/accessoires' element={<Accessoires ping={ping} setping={setping} />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path="/login" element={<Logi />} />
        <Route element={<PrivateRoute />}>
          <Route path="/Profil" element={<Profil ping={ping} setping={setping} />} />
        </Route>{" "}
      </Routes>


    </div>
  );
}

export default App;
