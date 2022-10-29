import React from "react";

const ColorHOC = (Component) => {
    const color = ["teal", "orange", "yellow", "red", "pink"];
    const colorChange = color[Math.floor(Math.random() * 4)];

    return () => {  //callback function
        return (
            <div style={{backgroundColor: colorChange}}>
                <Component />
            </div>
        )
    }
}

export default ColorHOC;