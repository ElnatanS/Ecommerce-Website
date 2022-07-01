import React from 'react';
import './App.css';
import NavBar from './navbar';
import SidePicture from "./sidepicture";
import SideContent from "./sidecontent";
function App() {
  return (
    <>
      <NavBar />
      <div className="Appflex">
        <SidePicture />
        <SideContent />
      </div>
    </>
  );
}
export default App;