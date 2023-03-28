import { useContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { AuthContext } from "./components/contex/authContext";
import Main from "./components/main/Main";
import SingleCategoryPage from "./components/pages/CategoryPage";
import Likes from "./components/pages/Likes";
import Login from "./components/pages/Login";
import NotFaund from "./components/pages/NotFaund";
import SinglePage from "./components/singlePage/SinglePage.jsx";

function App() {
  const { isLogin } = useContext(AuthContext);
  console.log(isLogin);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/single/:id" element={<SinglePage />} />
          <Route path="/category/:id" element={<SingleCategoryPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/likes" element={<Likes />} />
          <Route path="*" element={<NotFaund />} />
          {isLogin ? (
            <Route path="/user" element={<Main />} />
          ) : (
            <Route path="/user" element={<Login />} />
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
