import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar";
import { AuthContextProvider } from "./context/AuthContext";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Account from "./pages/Account"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthContextProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/account" element={<Account />} />
          </Routes>
        </AuthContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
