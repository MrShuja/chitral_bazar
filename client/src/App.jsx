import Header from "./components/layout/Header.jsx";
import AppRouter from "./router/AppRouter.jsx";
import {BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>  
  );
}
