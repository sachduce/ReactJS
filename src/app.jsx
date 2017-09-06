import React from "react";
import ReactDOM from "react-dom";
// Hack : typicallly you get data from API server and API call from within React
import data from "./data.js";
import MainBox from "./components/main-box.jsx";
import Thumbnail from "./components/thumbnail.jsx";
class App extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            current_title : data[0].title,
            current_url : data[0].url
        }
        this.setCurrent = this.setCurrent.bind(this);
    }
    setCurrent(title, url){
        var new_state = {current_title : title, current_url : url};
        this.setState(new_state);
    }
    render(){
        return(
            <div>
                <MainBox title={this.state.current_title} url={this.state.current_url}/>
                {
                    data.map(function (item) {
                        return(<Thumbnail
                            key= {item.title} /**/
                            title={item.title} /**/
                            url= {item.url}
                            setCurrent={this.setCurrent}
                        />)

                    }.bind(this)
                    )
                }


            </div>

        )
    }
}

var app =<App/>
var node = document.getElementById("app");
ReactDOM.render(app, node);