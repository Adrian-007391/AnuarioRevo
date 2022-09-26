import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./Pages/Main";
import Add from "./Pages/Add";
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
