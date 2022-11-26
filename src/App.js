import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Tasks from "./components/Tasks";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Projects />} />
        <Route path="/tasks" element={<Tasks />} />
      </Routes>
    </div>
  );
}

export default App;
