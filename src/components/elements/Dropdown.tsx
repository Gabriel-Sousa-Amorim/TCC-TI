import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

type DropdownProps = {
    url: string,
    text: string,
    className?: string,
    children: ReactNode
};

export default function Dropdown(props: DropdownProps): JSX.Element {
    return (
        <div className="flex flex-col items-center max-h-5 w-20 text-center"
        onMouseEnter={
            () => {
                const linksDropdown: any = document.getElementById(`${props.url}-links-dropdown`);
                const linksArray: DOMTokenList = linksDropdown.classList;
                linksArray.remove("hidden");
                linksArray.replace("opacity-0", "opacity-100");
            }
        }
        onMouseLeave={
            () => {
                const linksDropdown: any = document.getElementById(`${props.url}-links-dropdown`);
                const linksArray: DOMTokenList = linksDropdown.classList;
                linksArray.replace("opacity-100", "opacity-0");
                linksArray.add("hidden");
            }
        }
        >
        <Link className={ props.className } to={props.url}>{ props.text }</Link>
            <div id={props.url + "-links-dropdown"} className="w-80 pl-2 pr-10 py-2 z-50 relative border-2 border-teal-600 dark:border-teal-400 rounded flex flex-col items-start bg-neutral-100 dark:bg-neutral-900 transition-all duration-250 hidden opacity-0 ">
                { props.children }
            </div>
        </div>
    );
}