import { Routes, Route } from "react-router-dom";
import NavBar from "./components/partials/NavBar";
import Home from "./components/Home";
import Footer from "./components/partials/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
