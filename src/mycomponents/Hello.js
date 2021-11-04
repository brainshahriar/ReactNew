import React from 'react'

function Hello(props)
{
    function Dothis()
    {
      alert('Button is clicked')
    }
    return (

        <div>
        <button onClick={Dothis}>Click Me</button>
        <h2>Hello {props.name} age {props.age}</h2>
        </div>
    );
}
export default Hello