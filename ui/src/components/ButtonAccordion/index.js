import React from "react"
import style from "./ButtonAccordion.css"
import MainButton from "../MainButton/index"
import {CSSTransition} from "react-transition-group"

export default class ButtonAccordion extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isExpanded: false
        };

        this.classNames = {
            appear: 'my-appear',
            appearActive: 'my-active-appear',
            enter: style.fieldAreaEnter,
            enterActive: style.contentAreaEnterActive,
            enterDone: style.contentAreaEnterDone,
            exit: style.fieldAreaExit,
            exitActive: style.contentAreaExitActive,
            exitDone: style.contentAreaExitDone
        };

        this.interval = null;
    }

    toggle(e) {
        this.setState({
            isExpanded: !this.state.isExpanded
        });

        if (!this.state.isExpanded && this.props.onOpening) {
            this.props.onOpening(e);

            this.interval = window.setInterval(() => {
                this.props.onOpening(e);
            }, 1000);
        } else if ((this.state.isExpanded && this.interval)) {
            window.clearInterval(this.interval);
            this.interval = null;
        }
    }


    render() {

        return <div className={style.accordion}>

            <MainButton type="button" text={this.props.text} onClick={e => {
                this.toggle(e);
                if ((this.props.onClick)) {
                    this.props.onClick(e);
                }
            }}/>

            <CSSTransition in={this.state.isExpanded} timeout={600} unmountOnExit classNames={this.classNames}
                           onEntered={e => {}} onExited={e => {}}>

                <div className={style.contentArea}>
                    <div className={style.contentFrame}/>
                    <div className={style.innerContent}>
                        {this.props.children}
                    </div>
                </div>

            </CSSTransition>
        </div>;
    }
}