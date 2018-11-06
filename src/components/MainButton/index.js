import React from "react"
import style from "./MainButton.css"

export default class SubmitButton extends React.Component {

    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return <button type={this.props.type} className={style.button}>
            {this.props.text}
        </button>;
    }

}