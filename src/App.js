import QpNotes from "./Components/QpNotes";
import Classes from "./Components/Classes";
import Subject from "./Components/Subject";
import AdminLogin from "./Components/AdminLogin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import AdminDashbord from "./Components/AdminDashbord";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<AdminLogin />} />
          <Route path="/" element={<Classes />} />
          <Route path="/Subject" element={<Subject />} />
          <Route path="/Subject" element={<QpNotes />} />
          {/* <Routes path="/AdminDashbord" element={<AdminDashbord />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
