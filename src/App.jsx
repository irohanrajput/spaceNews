import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import ArticleView from "./components/ArticleView";

function App() {
  return (
    <>
    <Navbar/>
    <BrowserRouter>
     <Routes>
     <Route path="/" element={<Dashboard/>}></Route>
     <Route path="article/:id" element={<ArticleView/>}></Route>

     </Routes>
    
    </BrowserRouter>
    </>
  );
}

export default App;
