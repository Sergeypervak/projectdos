import React,{useEffect, useRef} from "react";

const WithRef = () => {
const inputEl = useRef(null);
console.log(inputEl);    

useEffect(() => {
    console.log(inputEl);
});

return (
   
   
   <div>
        <input placeholder="name" ref={inputEl} />
      
    </div>
);
};

export default WithRef;