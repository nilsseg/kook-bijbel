import React, { useContext } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Overview from "./pages/Overview";
import Recipe from "./pages/Recipe";
import RecipeForm from "./pages/RecipeForm";
import Error from "./pages/Error";
import { ThemeContext } from "./context/ThemeContext";
import Footer from "./components/Footer";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import PrivateRoute from "./components/PrivateRoute";
import RecipeUpdate from "./pages/RecipeUpdate";

function App() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className="App" id={theme}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/weekmenu"
          element={
            <PrivateRoute>
              <Menu />
            </PrivateRoute>
          }
        />
        <Route path="/overview" element={<Overview />} />
        <Route path="/recepten/:id/:name" element={<Recipe />} />
        <Route
          path="/nieuwrecept"
          element={
            <PrivateRoute>
              <RecipeForm />
            </PrivateRoute>
          }
        />
        <Route
          path="/herzierecept/:id"
          element={
            <PrivateRoute>
              <RecipeUpdate />
            </PrivateRoute>
          }
        />
        <Route path="/registreer" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
