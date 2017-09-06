import React from "react";
import ReactDOM from "react-dom";

class HelloWorld extends React.Component {


    render(){
        return (
           // React.createElement("div")
             (<div>Hello World</div>)
        )
    }
}
//var r_e  = <div/>
var r_e = <HelloWorld/>;
var node = document.getElementById("app");
ReactDOM.render(r_e,node);