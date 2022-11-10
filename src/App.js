import "./theme";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Forms from "./components/Home/Forms";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/forms" element={<Forms />} />
      </Routes>
    </div>
  );
}

export default App;
