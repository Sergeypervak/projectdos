import React,{useState} from "react";

function App() {
  const [count, setCount] = useState (8);
 
 
 
  return (
    <div className="App">
      <button onClick={() =>setCount(count + 1) }>{count}</button>
    </div>
  );
}

export default App;