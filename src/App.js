import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header"
import Footer from "./components/Footer"
import style from "./App.css"
import ButtonAccordion from "./components/ButtonAccordion";

export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            year: 0,
            month: 0,
            day: 0,
            hour: 0,
            minute: 0,
            second: 0
        }
    }

    render() {

        const {year, month, day} = this.state;

        return <div className={style.react_top}>

            <Header/>
            <div>
                <section className={style.content}>

                    <ButtonAccordion text="日付を表示">
                        {this.state}
                    </ButtonAccordion>

                    <ButtonAccordion text="現在時刻を表示">
                    </ButtonAccordion>

                </section>
            </div>
            <Footer/>

        </div>;
    }
}