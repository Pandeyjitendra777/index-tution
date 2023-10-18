import React, { useState, useEffect } from "react";
function User() {
  const [data, setData] = useState({name : "jitu", age : 29});
  useEffect(() => {
    console.log("use effect");
  }, []);
  return (
    <React.Fragment>
    <h1>user component</h1>
    <input type="text" value={data.name} onChange={(e)=>{setData({name: e.target.value})}} />
    <p>{data.name}</p>
    {/* <button>click me !</button> */}
    </React.Fragment>
    
  );
}
export default User;


