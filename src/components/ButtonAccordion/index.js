import React from "react"
import style from "./ButtonAccordion.css"
import MainButton from "../MainButton"

export default class ButtonAccordion extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isExpanded: false
        }
    }

    toggle(e) {
        this.setState({
            isExpanded: !this.state.isExpanded
        });
    }

    render() {
        return <div className={style.accordion}>

            <MainButton type="button" text={this.props.text} onClick={e => this.toggle(e)}/>
            <fieldset ref={this.fieldRef} className={style.fieldArea} data-is-expanded={this.state.isExpanded}>
                <div className={style.innerField}>
                {this.props.children}
                </div>
            </fieldset>
        </div>;
    }

}