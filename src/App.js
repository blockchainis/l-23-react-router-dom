import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Jenny from "./components/Jenny";
import Jisoo from "./components/Jisoo";
import Lisa from "./components/Lisa";
import Rose from "./components/Rose";
import Layout from "./components/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="jenny" element={<Jenny />}></Route>
        <Route path="jisoo" element={<Jisoo />}></Route>
        <Route path="lisa" element={<Lisa />}></Route>
        <Route path="rose" element={<Rose />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
