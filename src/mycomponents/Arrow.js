import React from 'react'

// function Arrow()
// {
//   return(
//     <button className="btn btn-danger">My Button</button>
//   );
// }
const AlertMe=(a)=>
{
  alert(a)
}
const Arrow=()=>
{
  return(
    <button onClick={AlertMe.bind(this,"I am from arrow")} className="btn btn-success">Button</button>
  );
}
export default Arrow