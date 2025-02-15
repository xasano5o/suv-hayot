import "./App.css";
import HomePageuser from "../page/home";
import { BrowserRouter, Route, Routes } from "react-router";
import HomeIdPage from "../components/ui/idPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePageuser />} />
          <Route path="/home/:id" element={<HomeIdPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
