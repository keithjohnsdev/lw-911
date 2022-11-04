import "./theme";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import HealthInsurance from "./components/Home/HealthInsurance";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/health-insurance" element={<HealthInsurance />} />
      </Routes>
    </div>
  );
}

export default App;
