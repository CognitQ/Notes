import QpNotes from "./Components/QpNotes";
import Classes from "./Components/Classes";
import Subject from "./Components/Subject";
import AdminLogin from "./Components/AdminLogin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminDashbord from "./Components/AdminDashbord";
function App() {

  const classSub=[{
    className: "1",
    classSubject: "Math",

  },
  {
    className: "2",
    classSubject: "Science",

  }]
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<AdminLogin />} />
          <Route path="/" element={<Classes />} />
          <Route path="/AdminDashbord" element={<AdminDashbord />} />
          {classSub.map((i)=>
          <>
          <Route path={`/${i.className}`} element={<Subject />} />
          <Route path={`/class/${i.classSubject}`} element={<QpNotes />} />
          </>
          
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
