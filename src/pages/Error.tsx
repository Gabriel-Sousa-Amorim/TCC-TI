import React from 'react'
import Header from "../components/containers/Header";
import Main from "../components/containers/Main";
import Footer from "../components/containers/Footer";
import { Link } from 'react-router-dom';
import { H1, H2, H3 } from "../components/elements/Headings";
import Article from '../components/containers/Article';

function Error(): JSX.Element {
  return (
    <>
      <Header />
      <Main>
        <Article classList='my-10'>
          <section className='flex flex-col gap-2'>
            <figure className='flex items-center'>
              <img className="w-10" src="/error-robot.svg" alt="error image" />
              <figcaption>
                <H1 classList='text-blue-600'>OOPS...</H1>
              </figcaption>
            </figure>
            <H2>Pedimos perdão pelo ocorrido...</H2>
            <p>
              Provavelmente o erro ocorreu pela página não existir.
            </p>
            <Link className="transition-colors duration-250 font-black underline" to="/">Clique aqui para voltar ao início</Link>
          </section>
        </Article>
      </Main>
      <Footer />

    </>
  )
}

export default Error;