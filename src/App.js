import QpNotes from "./Components/QpNotes";
import Classes from "./Components/Classes";
import Subject from "./Components/Subject";
import AdminLogin from "./Components/AdminLogin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminDashbord from "./Components/AdminDashbord";
import DataState from "./Context/DataState";
function App() {

  return (
    <div className="App">
      <DataState>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<AdminLogin />} />
            <Route path="/" element={<Classes />} />
            <Route path="/Subject" element={<Subject />} />
            <Route path="/Subject" element={<QpNotes />} />
            <Route path="/AdminDashbord" element={<AdminDashbord />} />
          </Routes>
        </BrowserRouter>
      </DataState>
    </div>
  );
}

export default App;
