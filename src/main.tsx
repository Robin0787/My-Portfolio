import React from "react";
import ReactDOM from "react-dom/client";
import Footer from "./components/shared/Footer.tsx";
import Navbar from "./components/shared/Navbar.tsx";
import Cursor from "./components/ui/Cursor.tsx";
import "./index.css";
import Home from "./pages/home/Home.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Navbar />
    <Home />
    <Footer />
    <Cursor />
  </React.StrictMode>
);
