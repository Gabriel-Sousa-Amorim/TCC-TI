import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../ThemeContext.js";

type DropdownProps = {
    url: string,
    text: string,
    className?: string,
    children: ReactNode
};

export default function Dropdown(props: DropdownProps): JSX.Element {
    const { theme } = useTheme();
    const defaultThemeProp = `${theme === 'dark' ? 'bg-neutral-950 text-neutral-50' : 'bg-neutral-50 text-neutral-950'}`;

    return (

        <div className={`flex flex-col items-center max-h-5 w-20 text-center z-50 ${defaultThemeProp}`}
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
            <div id={props.url + "-links-dropdown"} className={`w-80 p-4 relative border-2 rounded-2xl rounded flex flex-col items-start hidden ${defaultThemeProp}`}>
                { props.children }
            </div>
        </div>
    );
}