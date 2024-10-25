import React, { ReactNode } from "react";

export type defaultProps = {
    classList?: string,
    children: ReactNode
};

export function H1({ classList, children }: defaultProps): JSX.Element {
    return (
        <h1 className={"text-3xl font-extrabold " + classList}>
            { children }
        </h1>
    )
}

export function H2({ classList, children }: defaultProps): JSX.Element {
    return (
        <h2 className={"text-2xl font-extrabold no-underline " + classList}>
            { children }
        </h2>
    )
}

export function H3({ classList, children }: defaultProps): JSX.Element {
    return (
        <h3 className={"text-lg font-extrabold no-underline " + classList}>
            { children }
        </h3>
    )
}

export  function H4({ classList, children }: defaultProps): JSX.Element {
    return (
        <h4 className={"text-base font-extrabold no-underline " + classList}>
            { children }
        </h4>
    )
}

export function H5({ classList, children }: defaultProps): JSX.Element {
    return (
        <h5 className={"text-base font-bold no-underline " + classList }>
            { children }
        </h5>
    )
}


export function H6({ classList, children }: defaultProps): JSX.Element {
    return (
        <h6 className={"text-base font-semibold " + classList}>
            { children }
        </h6>
    )
}