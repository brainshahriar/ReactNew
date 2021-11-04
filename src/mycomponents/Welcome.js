import React, { Component } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import App from "../App";

class Welcome extends Component
{
    constructor(){
        super()
            var obj={
                    name:"Shahriar",
                    age:["28","30","20"],
                    sex:{
                        class2:"20",
                        class3:"22",
                        class10:"40"
                    }         
        }
        this.state=obj
    }
    render(){
        return <div>
            <h1>My name is = {this.state.name}</h1>
            <h1>My age is = {this.state.age[0]}</h1>
            <h1>My sex is = {this.state.sex.class3}</h1>
        </div>
    }
}
export default Welcome