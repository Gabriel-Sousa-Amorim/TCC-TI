import { Link } from 'react-router-dom';
import Dropdown from "../elements/Dropdown.js";
import ThemeToggleButton from "../elements/ThemeToogleBtn.js";
import { useTheme} from "../../ThemeContext.js";
import pipaDarkColored from "../../assets/Pipa Dark Colored.svg";
import pipaLightColored from "../../assets/Pipa Light Colored.svg";
import "../../App.css";

function Header(): JSX.Element {
    const { theme } = useTheme();
    const isDark: boolean = theme === 'dark';
    const defaultBackgroundProp = `${isDark ? 'bg-neutral-950' : 'bg-neutral-50'}`;
    const defaultTextProp = `${isDark ? 'text-neutral-50' : 'text-neutral-950'}`;
    const navLinksProps = `text-nowrap hover:text-teal-400 ${defaultTextProp} text-lg no-underline`;    
    return (
        <header className={`py-5 px-8 md:px-32 lg:px-48 xl:px-64 2xl:px-96 flex flex-col gap-5 justify-between items-center ` + defaultBackgroundProp}>
            <div className="w-full">
                <Link className="flex items-center justify-center gap-2 font-bold no-underline transition-colors" to="/TCC-TI/">
                    <img className="w-16" src={ isDark ? pipaDarkColored : pipaLightColored } alt="Ícone Pipa" />
                    <span className={`text-4xl ${defaultTextProp}`}>PIPA</span>
                </Link>
            </div>
            <nav className="w-full">
                <ul className="flex justify-between">
                    <li className={navLinksProps}>
                        <Link to="/TCC-TI/">Início</Link>
                    </li>
                    <Dropdown url="/TCC-TI/Sobre-Nos" text="Sobre nós" className={`no-underline ${defaultBackgroundProp} ${navLinksProps}`}>
                        <Link className={navLinksProps + " w-full text-start"} to="/TCC-TI/Sobre-Nos#mission">História</Link>
                        <Link className={navLinksProps + " w-full text-start"} to="/TCC-TI/Sobre-Nos#mission">Missão</Link>
                        <Link className={navLinksProps + " w-full text-start"} to="/TCC-TI/Sobre-Nos#vision">Visão</Link>
                        <Link className={navLinksProps + " w-full text-start"} to="/TCC-TI/Sobre-Nos#values">Valores</Link>
                    </Dropdown>
                    <li className={navLinksProps}>
                        <Link to="/TCC-TI/Contato">Contato</Link>
                    </li>
                    <div className="flex flex-col justify-center ml-3">
                        <ThemeToggleButton classList={defaultTextProp} />
                    </div>
                </ul>
            </nav>
        </header>
    )
}

export default Header;