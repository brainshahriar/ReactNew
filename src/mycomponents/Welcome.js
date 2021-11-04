import React,{Component} from 'react'

class Welcome extends Component
{
    DothisfromClass()
    {
      alert('Button is clicked')
    }
    render()
    {

            return <div>
            <button onClick={this.DothisfromClass}>Click me for class</button>
            <h1>I am shahriar from {this.props.name}</h1>
            </div>
        
    }
}
export default Welcome;