import React from "react";
import Nav from "./components/Nav";
import "./App.css";
import UploadProducts from "./components/UploadProducts";

const App = () => {
  return (
    <div>
      <Nav />
      <UploadProducts />
    </div>
  );
};

export default App;
