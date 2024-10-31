import { useTheme } from "../../ThemeContext.js";

function Main({ children }: any): JSX.Element {
    const { theme } = useTheme();
    const defaultThemeProp = `${theme === 'dark' ? 'bg-neutral-800 text-neutral-50' : 'bg-neutral-100 text-neutral-950'}`;
    return ( 
        <main className={`min-h-screen flex flex-1 flex-col gap-5 text-justify ${defaultThemeProp}`}>
            {children}
        </main>
    )
}

export default Main;