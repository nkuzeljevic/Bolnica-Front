import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DemoPage from "./pages/DemoPage/DemoPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import EmployeePreview from "./pages/EmployeePreviewPage/EmployeePreviewPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<DemoPage />} />
        <Route path="/login" exact element={<LoginPage />} />
        <Route path="/admin" exact element={<EmployeePreview />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
