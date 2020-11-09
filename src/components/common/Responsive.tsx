import React from 'react';
import Hidden from '@material-ui/core/Hidden';

export const PCCompnent: React.FC = (props) => {
    return (
        <Hidden only={["xs", "sm"]}>
            {props.children}
        </Hidden>
    )
}

export const TabletCompnent: React.FC = (props) => {
    return (
        <Hidden only={["xs", "md", "lg", "xl"]}>
            {props.children}
        </Hidden>
    )
}

export const PhoneCompnent: React.FC = (props) => {
    return (
        <Hidden only={["sm", "md", "lg", "xl"]}>
            {props.children}
        </Hidden>
    )
}


