// import React from "react";

import { H2 } from "../elements/Headings.tsx"
//import Link from "../elements/Link.tsx"
import { Link } from 'react-router-dom';

import Dropdown from "../elements/Dropdown.tsx"

function Header(): JSX.Element {
    return (
        <header className="py-5 px-32 flex flex-col gap-5 justify-between items-center text-neutral-950 bg-neutral-100 dark:text-neutral-50 dark:bg-neutral-950 border-b-4 border-neutral-300 dark:border-black transition-colors duration-250">
            <div className="w-full">
                <Link className="flex items-center justify-center gap-2 transition-colors duration-250 font-bold no-underline" to="/">
                    <img className="w-16" src="Pipa Dark Colored.svg" alt="" />
                    <span className="text-4xl">PIPA</span>
                </Link>
            </div>
            <nav className="w-full">
                <ul className="flex justify-between">
                    <li className="hover:text-teal-600 hover:dark:text-teal-400">
                        <Dropdown url="/about" text="Sobre nós" className="transition-colors duration-250 font-black no-underline no-underline">
                                <Link className="text-neutral-950 hover:text-teal-600 dark:text-neutral-50 hover:dark:text-teal-400 transition-colors duration-250 font-bold no-underline" to="/about#mission">História</Link>
                                <Link className="text-neutral-950 hover:text-teal-600 dark:text-neutral-50 hover:dark:text-teal-400 transition-colors duration-250 font-bold no-underline" to="/about#mission">Missão</Link>
                                <Link className="text-neutral-950 hover:text-teal-600 dark:text-neutral-50 hover:dark:text-teal-400 transition-colors duration-250 font-bold no-underline" to="/about#vision">Visão</Link>
                                <Link className="text-neutral-950 hover:text-teal-600 dark:text-neutral-50 hover:dark:text-teal-400 transition-colors duration-250 font-bold no-underline" to="/about#values">Valores</Link>
                        </Dropdown>
                    </li>
                    <li className="hover:text-blue-200">
                        <Link className="transition-colors duration-250 font-black no-underline" to="/contact">Contato</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;