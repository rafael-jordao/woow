import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar";
import { AuthContextProvider } from "./context/AuthContext";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Account from "./pages/Account"
import Protected from "./components/Protected";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthContextProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/account" element={<Protected><Account /></Protected>} />
          </Routes>
        </AuthContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
