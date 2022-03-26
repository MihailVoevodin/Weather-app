import React from "react";
import './info.css';

class Info extends React.Component {

    render() {
        return (
            <div className="info">
                <p className="info__city">{this.props.city}</p>
                <p className="info__temp">{Math.floor(this.props.temp - 273) + '°'}</p>
                <p className="info__feels">{'feels like: ' + Math.floor(this.props.feels_like - 273) + '°'}</p>
                <p className="info__city">{this.props.main}</p>
            </div>
        )        
    };
};

export default Info




