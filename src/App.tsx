import React from "react";
import Routes from "./Routes";
import { GlobalStyle } from "./Styles/Global";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Routes />
      <GlobalStyle />
      <ToastContainer
        toastStyle={{
          backgroundColor: "black",
          color: "red",
        }}
      />
    </>
  );
}

export default App;
