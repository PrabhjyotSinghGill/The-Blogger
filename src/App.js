import React from 'react';
import './App.css';
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Widgets from "./components/Widgets";
import "./App.css";

function App() {
  return (
    <div className="app">
      {/*Sidebar*/}
      <Sidebar></Sidebar>
      {/*Feed*/}
      <Feed></Feed>
      {/*Widgets*/}
      <Widgets></Widgets>
    </div>
  );
}

export default App;
