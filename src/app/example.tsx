import * as React from "react";
import { FunctionComponent } from "react";
import Paper from "@material-ui/core/Paper";
import styled from "styled-components";

const StyledPaper = styled(Paper)`
    background-color: green;
    text-align: center;
`;

export const Example: FunctionComponent = () => {
    return <div>
        <StyledPaper>Hello Styled World!</StyledPaper>
        <Paper>Hello Plain World!</Paper>
    </div>;
};