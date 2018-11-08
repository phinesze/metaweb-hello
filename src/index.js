import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header"
import Footer from "./components/Footer"
import style from "./index.css"
import ButtonAccordion from "./components/ButtonAccordion";

const Index = () => {
    return <div className={style.react_top}>

        <Header/>

        <section className={style.content}>
            <ButtonAccordion text="dropboxへログイン">
                ※dropboxログイン機能ボタンを表示
            </ButtonAccordion>

            <ButtonAccordion text="NGワードを設定する">
                ※dropboxログイン機能ボタンを表示
            </ButtonAccordion>

            <ButtonAccordion text="フィルターされたWebページを表示する">
                <form>
                    <label>URL</label><input type="text"/>
                </form>
            </ButtonAccordion>
        </section>

        <Footer/>

    </div>;
};

ReactDOM.render(<Index/>, document.getElementById('root'));