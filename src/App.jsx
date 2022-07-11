import React,{useState} from "react";

import


function App() {
  const [isClicker, setClicker] = useState (false);
  
 
 
  return (
    <div className="App">
     <WithRef/>
    <h2>React App</h2>
    <button onClick={() => setClicker(!isClicker)}>Toggle clicker</button>
   {isClicker && <Clicker/>}
   </div>
  );
}

export default App;
