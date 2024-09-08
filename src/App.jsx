import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Login from "./Pages/Auth/Login";
import Home from "./Pages/website/Home";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
