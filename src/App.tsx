import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import { Input } from "antd";
import axios from "axios";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Route } from "./routes";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Route />
      <Footer />
    </div>
  );
}

export default App;
