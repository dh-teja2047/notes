import React, { useState }  from "react";
import './App.css';
import RightPanel from './components/RightPanel';
import NotesPanel from './components/NotesPanel';



function App() {
  
  const [activePanel, setActivePanel] = useState("initial"); // initial state

  const handlePanelClick = () => {
    setActivePanel("new"); // set the new state upon clicking the left panel
  };
  

  return (
    <div className="App">
      <NotesPanel onClick={handlePanelClick} />
      <RightPanel activePanel={activePanel} />
    </div>
  );
}

export default App;
