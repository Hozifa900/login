import "./App.css";
import Congrats from "./Pages/Congrats/Congrats";
import Main from "./Pages/Main/Main";
import Signup from "./Components/Signup/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/congrats" element={<Congrats />} />
      </Routes>
      <Signup />
    </BrowserRouter>
  );
}

export default App;
