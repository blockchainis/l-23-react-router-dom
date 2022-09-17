import { Routes, Route } from "react-router-dom";

//components
import Home from "./components/Home";
import Jisoo from "./components/Jisoo";
import Jenny from "./components/Jenny";
import Lisa from "./components/Lisa";
import Rose from "./components/Rose";
import Layout from "./components/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/jenny" element={<Jenny />} />
        <Route path="/jisoo" element={<Jisoo />} />
        <Route path="/lisa" element={<Lisa />} />
        <Route path="/rose" element={<Rose />} />
      </Route>
    </Routes>
  );
}

export default App;
