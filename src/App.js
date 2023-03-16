import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./components/main/Main";
import SinglePage from "./components/singlePage/SinglePage.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/single/:id" element={<SinglePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
