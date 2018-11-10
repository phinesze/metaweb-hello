import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header"
import Footer from "./components/Footer"
import style from "./index.css"
import ButtonAccordion from "./components/ButtonAccordion";

const Index = () => {
    return <div className={style.react_top}>

        <Header/>
        <div>
            <section className={style.content}>
                <ButtonAccordion text="dropboxへログイン">
                    <p>※dropboxログイン機能を表示</p>
                </ButtonAccordion>

                <ButtonAccordion text="NGワードを設定する">
                    <p>※NGワード設定機能を表示</p>
                    <form>
                        <div>
                            <input type="text"/><input type="radio"/>
                        </div>
                    </form>
                </ButtonAccordion>

                <ButtonAccordion text="フィルターされたWebページを表示する">
                    <form>
                        <label>URL</label><input type="text"/>
                    </form>
                </ButtonAccordion>
            </section>
        </div>
        <Footer/>

    </div>;
};

ReactDOM.render(<Index/>, document.getElementById('root'));