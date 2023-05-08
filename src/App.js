import React from "react";
import Home from "./Components/Home/home";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
