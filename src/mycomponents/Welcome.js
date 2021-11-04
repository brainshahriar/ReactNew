import React,{Component} from 'react'

class Welcome extends Component
{
    DothisfromClass(x)
    {
      alert(x)
    }
    render()
    {

            return <div>
            <button onClick={this.DothisfromClass.bind(this,"Hello shawon")}>Click me for class</button>
            <h1>I am shahriar from {this.props.name}</h1>
            </div>
        
    }
}
export default Welcome;