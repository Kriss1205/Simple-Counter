import React from "react";
import PropTypes from "prop-types";

export const Counter = (props) => {
    let initialValue = "000000";
    let seconds = props.seconds.toString();
    let icon = <i className="far fa-clock"></i>;
    let result = (
        initialValue.split("").slice(seconds.length).join("") + seconds
    ).split("");
    result.unshift(icon);

    return (
        <div className="BigCounter">
            {result.map((e, i) => {
                return (
                    <div className="digits" key={i}>
                        {e}
                    </div>
                );
            })}
        </div>
    );
};
Counter.PropTypes = {
    seconds: PropTypes.string,
}; 