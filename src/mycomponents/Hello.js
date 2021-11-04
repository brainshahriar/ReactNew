import React,{ Component } from "react";


class Hello extends Component{

    constructor()
    {
        super()
        this.state={
            name:"shahriars"
        }
    }
    changeName(a)
    {
         this.setState({name:a})
    }
    render(){
        return <div>
            <h1>{this.state.name}</h1>
            <button onClick={this.changeName.bind(this,"Rain")} className="btn btn-primary">Change Name</button>
        </div>
    }
}
export default Hello