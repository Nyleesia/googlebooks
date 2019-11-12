import React from "react";

export const Container = (props) => {
    return (
        <div className={`container${props.fluid ? "-fluid" : ""}`}>
            {props.children}
        </div>
    )
};

export const Row = (props) => {
    return (
        <div className={`row${props.fluid ? "-fluid" : ""}`}>
        {props.children}
        </div>
    )
};

export const Column = (props) => {
    const size = props.size.split(" ").map(size => "col-" + size).join(" ");
    return (
      <div className={size}>
        {props.children}
      </div>
    )
};
