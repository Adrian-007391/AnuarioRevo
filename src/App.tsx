import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Add from "./Pages/Add";
import Main from "./Pages/Main";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/add" element={<Add />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
