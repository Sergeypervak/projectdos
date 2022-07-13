import React,{useState, useEffect, useRef} from "react";

function setDefaultValue() {
    
}

export default function Timer () {
    const [count, setCount] = useState(0);
    const[isCounting, setIsCount] = useState(false);
    const timerIdRef=useRef(null);
    const handleReset = () => {
        setCount(0);
        setIsCount(false);
       };
     };
    const handleStart = () => {
      setIsCount(true)
      timerIdRef.current = setInterval(() => {
        setCount(count + 1)
    }, 1000);
};

const handleStop = () => {
    clearInterval(timerIdRef.current);
   setIsCount(false);
};

useEffect(() => {

}, [count]);

return (
    <div className="timer">
        <h1>React timer</h1>
        <h3>{count}</h3>
        {!isCounting ? (
            <button onClick={handleStart}>Start</button>
        ) : (
            <button onClick={handleStop}>Stop</button>
        )}
        <button onClick={handleReset}>Reset</button>
    </div>
)



;