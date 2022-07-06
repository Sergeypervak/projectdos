import React,{useRef} from "react";

const WithRef = () => {
const inputEl = useRef(null)
    return (
    <div>
        <input placeholder="name" />
    </div>
);
};

export default WithRef;