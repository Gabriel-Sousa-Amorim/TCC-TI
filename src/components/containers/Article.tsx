import { defaultProps } from "../elements/Headings.js";

function Article({ classList, children }: defaultProps): JSX.Element {
    return ( 
        <article className={'flex flex-col px-10 sm:px-16 md:px-32 lg:px-48 xl:px-64 2xl:px-96 mb-10 ' + classList} >
            {children}
        </article>
    )
}

export default Article;