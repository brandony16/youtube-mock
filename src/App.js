import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import "./styles/GlobalStyles.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage user={"null"}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
