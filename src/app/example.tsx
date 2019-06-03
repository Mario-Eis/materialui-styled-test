import * as React from "react";
import { FunctionComponent } from "react";
import Paper from "@material-ui/core/Paper";
import styled from "styled-components";
import ListItemText from "@material-ui/core/ListItemText";
import { List } from "@material-ui/core";

const StyledPaper = styled(Paper)`
    background-color: green;
    text-align: center;
`;

const StyledList = styled(List)`
    background-color: blue;
    text-align: center;
` as typeof List;

export const Example: FunctionComponent = () => {
    return <div>
        <StyledPaper>Hello Styled World!</StyledPaper>
        <Paper>Hello Plain World!</Paper>

        <div style={{marginBottom: "100px"}}/>

        <StyledList>
            <ListItemText>Styled List without attributes works</ListItemText>
        </StyledList>
        <StyledList component="nav">
            <ListItemText>Styled List with attributes doesn't work</ListItemText>
        </StyledList>
        <List component="nav">
            <ListItemText>Plain List with attributes works</ListItemText>
        </List>
    </div>;
};