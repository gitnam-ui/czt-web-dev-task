import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router";
import { Men, Women, Kids, Newandfeatured, Gifts, Task } from "./components/task-about/about"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Men" element={<Men />} />
      <Route path="/Women" element={<Women />} />
      <Route path="/Kids" element={<Kids />} />
      <Route path="/New-&-featured" element={<Newandfeatured />} />
      <Route path="/Gifts" element={<Gifts />} />
      <Route path="/task/:card" element={<Task />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
