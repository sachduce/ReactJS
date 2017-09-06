import React from  "react";

export default class Thumbnail extends React.Component{
    onThumbnailClickHandler(event){
        console.log(event);
        console.log("this button was clicked");
        console.log(this.props.title);
        this.props.setCurrent(this.props.title, this.props.url)
    }

    render(){
        return(
            <button
                className="btn btn-lg btn-default"
                onClick={this.onThumbnailClickHandler.bind(this)}>{this.props.title}</button>
        )
    }
}

