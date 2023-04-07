
import "./App.css";
import { Routes, Route,useNavigate } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {  userCurrent } from "./JS/userSlice/userSlice";
import Profil from "./components/Profil";
import Header from "./components/Header";
import Navbar from "./components/Navbar"
import MobilCard from "./components/MobilCard"
import PrivateRoute from "./routes/PrivateRoute";
import { getproduct } from "./JS/productSlice/productSlice";
import user from "./components/Header";
import Contacter from "./components/Contacter";
function App() {
  const isAuth = localStorage.getItem("token");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuth) {
      dispatch(userCurrent());
    }
  }, []);

  useEffect(() => {
    dispatch(getproduct())
  }, [])

  const products = useSelector((store) => store.product?.product);

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/"  element={<Header user={user}  />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ réference" element={<h1>commander par référence</h1>} />
        <Route path="/contactez" element={<Contacter />}/>
        <Route element={<PrivateRoute />}/>
          <Route path="/profil" element={<Profil />} />
         
        
      </Routes>
      {products?.map((el) => <MobilCard mobil={el}  />)}
    </div>
  );
}
export default App
