import React from "react"
import style from "./ButtonAccordion.css"
import MainButton from "../MainButton"

export default class ButtonAccordion extends React.Component {

    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return <div className={style.accordion}>
            <MainButton type="button" text={this.props.text}/>
            <fieldset className={style.field}>
                {this.props.children}
            </fieldset>
        </div>;
    }

}