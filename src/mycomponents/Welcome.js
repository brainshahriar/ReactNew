import React, { Component } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import App from "../App";

class Welcome extends Component
{
    constructor(){
        super()
        this.state={
            name:"Shahriar",
            age:"28",
            sex:"male",
        }
    }
    render(){
        return <div>
            <h1>My name is = {this.state.name}</h1>
            <h1>My age is = {this.state.age}</h1>
            <h1>My sex is = {this.state.sex}</h1>
        </div>
    }
}
export default Welcome