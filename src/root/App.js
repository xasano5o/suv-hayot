import "./App.css";
import HomePageuser from "../page/home";
import { BrowserRouter, Route, Routes } from "react-router";
import HomeIdPage from "../components/ui/idPage";
import PayPage from "../page/pay";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePageuser />} />
          <Route path="/home/:id" element={<HomeIdPage />} />
          <Route path="/pay" element={<PayPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
