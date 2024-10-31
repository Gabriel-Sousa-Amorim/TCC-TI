
import { Link } from 'react-router-dom';
import Dropdown from "../elements/Dropdown.js"
import ThemeToggleButton from "../elements/ThemeToogleBtn.js";
import { useTheme} from "../../ThemeContext.js";

function Header(): JSX.Element {
    const { theme } = useTheme();
    
    const defaultThemeProp = `${theme === 'dark' ? 'bg-neutral-950 text-neutral-50' : 'bg-neutral-50 text-neutral-950'}`;
    const navLinksProps = `text-nowrap hover:text-teal-600 hover:dark:text-teal-400 text-lg no-underline ${theme === 'dark' ? 'text-neutral-50' : 'text-neutral-950'}`;    
    return (
        <header className={`py-5 px-8 md:px-32 lg:px-48 xl:px-64 2xl:px-96 flex flex-col gap-5 justify-between items-center ` + defaultThemeProp}>
            <div className="w-full">
                <Link className="flex items-center justify-center gap-2 font-bold no-underline" to="/">
                    <img className="w-16" src="../../assets/Pipa Dark Colored.svg" alt="" />
                    <span className="text-4xl">PIPA</span>
                </Link>
            </div>
            <nav className="w-full">
                <ul className="flex justify-between">
                    <li className={navLinksProps}>
                        <Link to="/">Início</Link>
                    </li>
                    <li className={navLinksProps}>
                        <Dropdown url="/about" text="Sobre nós" className={`no-underline ${defaultThemeProp}`}>
                            <Link className={navLinksProps + " w-full text-start"} to="/about#mission">História</Link>
                            <Link className={navLinksProps + " w-full text-start"} to="/about#mission">Missão</Link>
                            <Link className={navLinksProps + " w-full text-start"} to="/about#vision">Visão</Link>
                            <Link className={navLinksProps + " w-full text-start"} to="/about#values">Valores</Link>
                        </Dropdown>
                    </li>
                    <li className={navLinksProps}>
                        <Link to="/Contact">Contato</Link>
                    </li>
                    <div className="flex flex-col justify-center ml-3">
                        <ThemeToggleButton />
                    </div>
                </ul>
            </nav>
        </header>
    )
}

export default Header;