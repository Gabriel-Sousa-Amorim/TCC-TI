import { Link } from "react-router-dom";
import { useTheme } from "../../ThemeContext.js";
function Footer(): JSX.Element {
    const { theme } = useTheme();
    const defaultThemeProp = `${theme === 'dark' ? 'bg-neutral-950' : 'bg-neutral-800'}`;
    return (
        <footer className={`min-h-40 py-5 px-8 md:px-32 lg:px-48 xl:px-64 2xl:px-96 flex justify-between items-center text-neutral-50 ${defaultThemeProp}`}>
            <h2 className="text-neutral-50 text-2xl">
                <Link to="/">
                <img className="w-16" src="Pipa Dark Colored.svg" alt="" />
                </Link>
            </h2>
        </footer>
    )
}

export default Footer;