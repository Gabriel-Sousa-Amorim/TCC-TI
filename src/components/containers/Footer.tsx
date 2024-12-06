import { Link } from "react-router-dom";
import { useTheme } from "../../ThemeContext.js";
import pipaDarkColored from "../../assets/Pipa Dark Colored.svg"

function Footer(): JSX.Element {
    const { theme } = useTheme();
    const defaultThemeProp = `bg-neutral-950`;
    return (
        <footer className={`min-h-40 py-5 px-8 md:px-32 lg:px-48 xl:px-64 2xl:px-96 flex justify-between items-center text-neutral-50 ${defaultThemeProp}`}>
            <div>
                <h2 className="text-neutral-50 text-2xl">
                    <Link to="/TCC-TI/">
                        <img className="w-16" src={pipaDarkColored} alt="" />
                    </Link>
                </h2>
            </div>
            <div>
                <ul className="flex flex-col items-center gap-2">
                    <li>
                        <Link to="/TCC-TI/">Início</Link>
                    </li>
                    <li>
                        <Link to="/TCC-TI/Sobre-Nos">Sobre Nós</Link>
                    </li>
                    <li>
                        <Link to="/TCC-TI/Contato">Contato</Link>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;