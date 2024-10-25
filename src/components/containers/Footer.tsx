import React from "react";

import { H2 } from "../elements/Headings.tsx"
import { Link } from "react-router-dom";

function Footer(): JSX.Element {
    return (
        <footer className="bg-neutral-100 dark:bg-neutral-950 min-h-40 border-t-4 border-neutral-300 dark:border-black py-5 px-20 flex justify-between items-center">
            <h2 className="text-neutral-50 text-2xl">
                <Link to="/">
                <img className="w-16" src="Pipa Dark Colored.svg" alt="" />
                </Link>
            </h2>
        </footer>
    )
}

export default Footer;