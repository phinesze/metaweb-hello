import React from "react";
import Header from "./components/Header/index"
import Footer from "./components/Footer/index"
import style from "./App.css"
import ButtonAccordion from "./components/ButtonAccordion/index";
import {SERVER_HOME} from "./Constants"

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.serverHome = SERVER_HOME;
        this.state = {
            year: 0,
            month: 0,
            day: 0,
            hour: 0,
            minute: 0,
            second: 0,
        };
    }

    handleClickDisplayDate() {
        const app = this;

        fetch(this.serverHome + "/sample/date/", {mode: "cors"})
            .then(response => {
                return response.json();
            })
            .then(json => app.setState({
                year: json.year,
                month: json.month,
                day: json.day,
            }));
    }

    handleClickDisplayTime() {
        const app = this;

        this.timeInterval = window.setInterval(() => {

            fetch(this.serverHome + "/sample/time/", {mode: "cors"})
                .then(response => {
                    return response.json();
                })
                .then(json => app.setState({
                    hour: json.hour,
                    minute: json.minute,
                    second: json.second,
                }));
        }, 1000);

    }

    render() {

        const {year, month, day, hour, minute, second} = this.state;

        return <div className={style.react_top}>

            <Header/>
            <div>
                <section className={style.content}>

                    <ButtonAccordion text="Hello" onClick={e => this.handleClickDisplayDate(e)}>
                        <p>ようこそ！</p>
                    </ButtonAccordion>

                    <ButtonAccordion text="日付を表示" onClick={e => this.handleClickDisplayDate(e)}>
                        {year}年{month}月{day}日
                    </ButtonAccordion>

                    <ButtonAccordion text="現在時刻を表示" onOpening={e => this.handleClickDisplayTime(e)}>
                        {hour}時{minute}分{second}秒
                    </ButtonAccordion>

                </section>
            </div>
            <Footer/>

        </div>;
    }
}