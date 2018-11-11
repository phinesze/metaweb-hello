import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header"
import Footer from "./components/Footer"
import style from "./index.css"
import ButtonAccordion from "./components/ButtonAccordion/App";

const a = () => {
    return {hour: 10, minute: 10, second: 10};
}

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return <div className={style.react_top}>

            <Header/>
            <div>
                <section className={style.content}>

                    <ButtonAccordion text="日付を表示">
                    </ButtonAccordion>

                    <ButtonAccordion text="現在時刻を表示">
                    </ButtonAccordion>

                </section>
            </div>
            <Footer/>

        </div>;
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));