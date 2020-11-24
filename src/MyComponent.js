import React from "react";

const MyComponent = (props) => {
    return (
        <div>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <p>This image has been clicked {props.count} times.</p>
            <img onClick={props.onClick} src="https://i.redd.it/d0fdjknj81y51.png" alt="" width="1250"/>
        </div>
    )
}

export default MyComponent;