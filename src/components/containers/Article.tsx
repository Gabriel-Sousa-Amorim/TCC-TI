import React, { ReactNode } from "react";
import { defaultProps } from "../elements/Headings";

function Article({ classList, children }: defaultProps): JSX.Element {
    return ( 
        <article className={'flex flex-col px-72 mb-4 ' + classList} >
            {children}
        </article>
    )
}

export default Article;