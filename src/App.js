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
            second: 0,
        };
    }

    clicked1() {
        this.setState({
            year: 2222,
            month: 2,
            day: 2,
        });
    }

    clicked2() {
        this.setState({
            hour: 2,
            minute: 2,
            second: 2,
        });
    }


    render() {

        const {year, month, day, hour, minute, second} = this.state;

        return <div className={style.react_top}>

            <Header/>
            <div>
                <section className={style.content}>

                    <ButtonAccordion text="日付を表示" onClick={e => this.clicked1(e)}>
                        {year}年{month}月{day}日
                    </ButtonAccordion>

                    <ButtonAccordion text="現在時刻を表示" onClick={e => this.clicked2(e)}>
                        {hour}時{minute}分{second}秒
                    </ButtonAccordion>

                </section>
            </div>
            <Footer/>

        </div>;
    }
}