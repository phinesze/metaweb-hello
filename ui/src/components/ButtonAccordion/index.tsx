import React from "react"
import style from "./ButtonAccordion.css"
import MainButton from "../MainButton/index"
import {CSSTransition} from "react-transition-group"

interface ButtonAccordionProps {
    text: String,
    onClick?: (e?: any) => void,
    onOpening?: (e?: any) => void
}

interface ButtonAccordionState {
    isExpanded: boolean
}

export default class ButtonAccordion extends React.Component<ButtonAccordionProps, ButtonAccordionState> {

    classNames: any;
    interval: number | null;

    constructor(props: ButtonAccordionProps) {
        super(props);

        this.state = {
            isExpanded: false
        };

        this.classNames = {
            // appear: 'my-appear',
            // appearActive: 'my-active-appear',
            // enter: style.fieldAreaEnter,
            enterActive: style.contentAreaEnterActive,
            enterDone: style.contentAreaEnterActive,
            // exit: style.fieldAreaExit,
            exitActive: style.contentAreaExitActive,
            exitDone: style.contentAreaExitActive
        };

        this.interval = null;
    }

    toggle(event: any) {
        this.setState({
            isExpanded: !this.state.isExpanded
        });

        if (!this.state.isExpanded && this.props.onOpening) {
            this.props.onOpening(event);

            this.interval = window.setInterval(() => {
                this.props.onOpening!(event);
            }, 1000);
        } else if ((this.state.isExpanded && this.interval)) {
            window.clearInterval(this.interval);
            this.interval = null;
        }
    }


    render() {

        return <div className={style.accordion}>

            <MainButton type="button" text={this.props.text} onClick={(event: any) => {
                this.toggle(event);
                if ((this.props.onClick)) {
                    this.props.onClick(event);
                }
            }}/>

            <CSSTransition in={this.state.isExpanded} timeout={600} unmountOnExit classNames={this.classNames}
                           onEntered={() => {
                           }} onExited={() => {
            }}>

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