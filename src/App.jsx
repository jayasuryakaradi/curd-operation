import React from "react";
import Create from "./Components/Create/Create";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Read from "./Components/Read/Read";
import Update from "./Components/Update/Update";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Create />}/>
        <Route path="/read" element={<Read/>}/>
        <Route path="/update" element={<Update/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
