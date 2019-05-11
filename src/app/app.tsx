import React from "react";
import ReactDOM from "react-dom";
import { Example } from "./example";
import { StylesProvider } from '@material-ui/styles';

ReactDOM.render(
    <StylesProvider injectFirst>
        <Example/>
    </StylesProvider>,
    document.getElementById("app") as HTMLElement
);