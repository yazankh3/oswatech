import "./App.css";
import Header from "./components/header/Header";
import NavBar from "./components/navBar/NavBar";
import Login from "./components/login/Login";
import Footer from "./components/footer/Footer";
import NavBottom from "./components/navBottom/NavBottom";
// import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Login />
      <NavBottom />
      <Footer />
    </div>
  );
}

export default App;
