import React from "react"
import style from "./Header.css"

export default class Header extends React.Component {

    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return <header className={style.header}>
            <div>WebページNGツール184</div>
        </header>;
    }

}