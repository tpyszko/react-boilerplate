import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "./container/App"

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<App />, wrapper) : false;