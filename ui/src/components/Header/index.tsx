import React from "react"
import style from "./Header.css"

export default class Header extends React.Component<{}, {}> {

    constructor(props: {}) {
        super(props);

        this.state = {}
    }

    render(): JSX.Element {
        return <header className={style.header}>
            <div>MetaWebSample</div>
        </header>;
    }

}