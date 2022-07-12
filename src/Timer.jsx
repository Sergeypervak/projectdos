import React,{useState, useEffect, useRef} from "react";


export default function Timer () {
    const [count, setCount] = useState(0);
    const[isCounting, setIsCount] = useState(false);

    const handleReset = () => {
        this.setState({
            count: 0,
            isCounting: false,
        });
     };
    const handleStart = () => {
        this.setState({
            isCounting: false,
    });
    this.counterId = setInterval(() => {
        this.setState({count: this.state.count + 1});
    }, 1000);
};

const handleStop = () => {
    clearInterval(this.counterId);
    this.setState({
        isCounting: false,
    });
};





};