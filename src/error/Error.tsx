import Header from "../components/containers/Header.js";
import Main from "../components/containers/Main.js";
import Footer from "../components/containers/Footer.js";
import { Link } from 'react-router-dom';
import { H1, H2 } from "../components/elements/Headings.js";
import Article from '../components/containers/Article.js';
import { useTheme } from '../ThemeContext.js';


function Error(): JSX.Element {
  const { theme } = useTheme();
  const textProps: string = `${theme === 'dark' ? 'text-neutral-50' : 'text-neutral-950'}`;
  return (
    <>
      <Header />
      <Main>
        <Article classList='my-10'>
          <section className='flex flex-col gap-2'>
            <figure className='flex items-center gap-4 py-2'>
              <img className="w-10" src="/error-robot.svg" alt="Robot icon" />
              <figcaption>
                <H1 classList='text-orange-500'>OOPS...</H1>
              </figcaption>
            </figure>
            <H2 classList={textProps}>Pedimos perdão pelo ocorrido...</H2>
            <p className={textProps}>
              Provavelmente o erro ocorreu pela página não existir.
            </p>
            <Link className={textProps + "hover:text-teal-400 transition-colors font-black underline"} to="/TCC-TI/">Clique aqui para voltar ao início</Link>
          </section>
        </Article>
      </Main>
      <Footer />

    </>
  )
}

export default Error;