import React from 'react';
import style from "./style.module.css";
import {Wrapper} from "./types";

const Rounded = (props: Wrapper) => {
    return (
        <div className={`${style.rounded} ${props.className}`} style={props.style}>
            {props.children}
        </div>
    );
};

export {Rounded};