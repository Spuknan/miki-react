import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import './main.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Page404 from "./pages/main/Page404"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<App />} />
        <Route exact path="/404" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);