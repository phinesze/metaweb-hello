import React from "react"
import style from "./MainButton.css"

export default class MainButton extends React.Component {

    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return <button type={this.props.type} className={style.button} onClick={this.props.onClick}>
            {this.props.text}
        </button>;
    }

}