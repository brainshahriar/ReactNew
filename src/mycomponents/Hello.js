import React from 'react'

function Hello(props)
{
    function Dothis(e)
    {
      alert(e)
    }
    return (

        <div>
        <button onClick={Dothis.bind(this,"Hello Shahriar")}>Click Me</button>
        <h2>Hello {props.name} age {props.age}</h2>
        </div>
    );
}
export default Hello