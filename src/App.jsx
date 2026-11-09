import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Info from "./components/Info";
import Course from "./components/Course";
import Projects from "./components/Projects";
import Register from "./components/Register";

const App = () => {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/infos" element={<Info />} />
        <Route path="/cours" element={<Course />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
