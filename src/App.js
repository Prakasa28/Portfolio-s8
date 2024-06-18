import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Index from "./Pages/index";
import GraduationProject from "./Pages/GraduationProject";

function App() {
  return (
    <Router>
      <Routes>
        {/* Other routes */}
        <Route path="/" element={<Index />} />
        <Route path={"/graduationProject"} element={<GraduationProject />} />
      </Routes>
    </Router>
  );
}
export default App;
