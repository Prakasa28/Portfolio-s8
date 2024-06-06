import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GroupProject from "./Pages/GroupProject";
import Index from "./Pages/index";
import IndividualProject from "./Pages/IndividualProject";
import InternationalProject from "./Pages/InternationalProject";
import GraduationProject from "./Pages/GraduationProject";

function App() {
  return (
    <Router>
      <Routes>
        {/* Other routes */}
        <Route path="/groupProject" element={<GroupProject />} />
        <Route path="/" element={<Index />} />
        <Route path="/individualProject" element={<IndividualProject />} />
        <Route
          path="/internationalProject"
          element={<InternationalProject />}
        />
        <Route path={"/graduationProject"} element={<GraduationProject/>}/>
      </Routes>
      
    </Router>
  );
}
export default App;
