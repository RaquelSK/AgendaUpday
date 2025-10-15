import { Routes, Route } from "react-router-dom";
import LoginScreen from "./pages/Login.jsx";
import CadastroScreen from "./pages/Cadastro.jsx";
import Carousel from "./Carousel.jsx";
import EventoModal from "./pages/Criar_Evento.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
    </Routes>
  );
}

