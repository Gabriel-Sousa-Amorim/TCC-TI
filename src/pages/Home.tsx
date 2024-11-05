import { useTheme } from '../ThemeContext.js';

import Header from "../components/containers/Header.js";
import Main from "../components/containers/Main.js";
import Article from '../components/containers/Article.js';
import Footer from "../components/containers/Footer.js";
import { H1, H2 } from "../components/elements/Headings.js";

import useIsVisible from "./Other.js";
import { useRef } from "react";
import { Link } from 'react-router-dom';

function Home(): JSX.Element {

  const ref1: any = useRef();
  const ref2: any = useRef();
  const ref3: any = useRef();
  const ref4: any = useRef();
  const ref5: any = useRef();

  const isVisible1 = useIsVisible(ref1);
  const isVisible2 = useIsVisible(ref2);
  const isVisible3 = useIsVisible(ref3);
  const isVisible4 = useIsVisible(ref4);
  const isVisible5 = useIsVisible(ref5);

  const { theme } = useTheme();
  const isDark = theme === "dark";

  const defaultTextProp = isDark ? 'text-neutral-50' : 'text-neutral-900';
  const defaultSVGProp = isDark ? 'fill-neutral-50' : 'fill-neutral-900';

  return (
    <>
      <Header />
      <Main>
        <section>
          <div ref={ref1} className={`home-page-image bg-no-repeat bg-cover bg-fixed bg-bottom h-80`}>
            <div className={`home-section-dark h-full flex flex-col gap-5 items-center justify-center`}>
              <h2 className={`${isVisible1 ? "tracking-in-contract-bck" : ''} text-neutral-50 delay-1000 text-6xl font-black [text-shadow:_0_0px_5px_#431407]`}>PIPA</h2>
              <h3 className={`${isVisible1 ? "tracking-in-contract-bck" : ''} text-neutral-50 delay-1000 text-2xl font-black [text-shadow:_0_0px_5px_#431407]`}>A sua consultoria de TI</h3>
            </div>
          </div>
          <div className='w-full home-page-mask home-page-image bg-no-repeat bg-cover bg-fixed bg-bottom'>
            <div id='wave-mask' className='home-section-dark w-full'></div>
          </div>
        </section>
        <Article>
          <section className='flex flex-col gap-14'>
            <H1 classList={`${isDark ? "text-teal-400 border-teal-400" : "text-teal-600 border-teal-600"} border-y-4 text-center py-2 my-2`}>Home</H1>
            <div ref={ref2} className="flex flex-col gap-5 md:flex-row items-center ">
              <H2 classList={`${defaultTextProp} ${isVisible2 ? "roll-in-blurred-left" : ''} text-center w-full md:w-5/12 h-full text-5xl`}>
                Bem Vindos
              </H2>
              <p className={` ${isVisible2 ? "roll-in-blurred-right" : ''} ${defaultTextProp} sm:w-full md:w-7/12 text-lg`}>

                A PIPA é uma empresa focada em oferecer soluções inovadoras e personalizadas em tecnologia da informação. Sua equipe de especialistas está disponível para ajudar a otimizar processos e impulsionar projetos, com foco nas necessidades dos clientes. A empresa convida a explorar seus serviços e ficar atualizada sobre as tendências em TI, oferecendo suporte contínuo para o crescimento digital dos negócios.              </p>
            </div>
          </section>
        </Article>
        <Article classList={`${isDark ? "bg-neutral-900" : "bg-neutral-200"} py-16 md:pt-10 md:pb-0 mb-48`}>
          <section className='flex flex-col gap-8 items-center'>
            <div>
              <H2 classList={`${defaultTextProp} text-5xl md:text-5xl`}>Nossos planos</H2>
            </div>
            <div ref={ref3} className="flex flex-col md:flex-row md:h-32 gap-12">
              <div className={`${isVisible3 ? "swing-in-top-fwd" : 'swing-out-top-fwd'} [animation-duration:_500ms] flex w-52 h-72 flex-col justify-around bg-neutral-50 border-4 border-neutral-100 p-5 rounded-xl`}>
                <H2 classList="text-neutral-950 text-center text-2xl">Lite</H2>
                <ul>
                  <li className='text-teal-400'>1. Lorem ipsum</li>
                  <li className='text-teal-400'>2. Lorem ipsum</li>
                  <li className='text-teal-400'>3. Lorem ipsum</li>
                  <li className='text-teal-400'>4. Lorem ipsum</li>
                </ul>
                <Link className='text-orange-500 border-2 border-orange-500 hover:bg-orange-500 hover:text-orange-50 p-4 rounded-3xl flex items-center gap-5' to="#coffee-btn">
                  Contratar
                </Link>
              </div>
              <div className={`${isVisible3 ? "swing-in-top-fwd" : 'swing-out-top-fwd'} [animation-duration:_1000ms] flex w-52 h-72 flex-col justify-around bg-neutral-50 border-4 border-neutral-100 p-5 rounded-xl`}>
                <H2 classList="text-neutral-950 text-center text-2xl">Standard</H2>
                <ul>
                  <li className='text-teal-400'>1. Lorem ipsum</li>
                  <li className='text-teal-400'>2. Lorem ipsum</li>
                  <li className='text-teal-400'>3. Lorem ipsum</li>
                  <li className='text-teal-400'>4. Lorem ipsum</li>
                </ul>
                <Link className='text-orange-500 border-2 border-orange-500 hover:bg-orange-500 hover:text-orange-50 p-4 rounded-3xl flex items-center gap-5' to="#coffee-btn">
                  Contratar
                </Link>
              </div>
              <div className={`${isVisible3 ? "swing-in-top-fwd" : 'swing-out-top-fwd'} [animation-duration:_1500ms] flex w-52 h-72 flex-col justify-around bg-neutral-50 border-4 border-neutral-100 p-5 rounded-xl`}>
                <H2 classList="text-neutral-950 text-center text-2xl">Pro</H2>
                <ul>
                  <li className='text-teal-400'>1. Lorem ipsum</li>
                  <li className='text-teal-400'>2. Lorem ipsum</li>
                  <li className='text-teal-400'>3. Lorem ipsum</li>
                  <li className='text-teal-400'>4. Lorem ipsum</li>
                </ul>
                <Link className='text-orange-500 border-2 border-orange-500 hover:bg-orange-500 hover:text-orange-50 p-4 rounded-3xl flex items-center gap-5' to="#coffee-btn">
                  Contratar
                </Link>
              </div>
            </div>
          </section>
        </Article>
        <section className='flex flex-col gap-8 items-center my-5'>
          <button id="coffee-btn" className='text-orange-500 border-2 border-orange-500 hover:bg-orange-500 hover:text-orange-50 p-4 rounded-3xl flex items-center gap-5'>
            Marque para tomar um Café Conosco
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M.11 3.187A.5.5 0 0 1 .5 3h13a.5.5 0 0 1 .488.608l-.22.991a3.001 3.001 0 0 1-1.3 5.854l-.132.59A2.5 2.5 0 0 1 9.896 13H4.104a2.5 2.5 0 0 1-2.44-1.958L.012 3.608a.5.5 0 0 1 .098-.42Zm12.574 6.288a2 2 0 0 0 .866-3.899zM1.124 4l1.516 6.825A1.5 1.5 0 0 0 4.104 12h5.792a1.5 1.5 0 0 0 1.464-1.175L12.877 4H1.123Z" />
            </svg>
          </button>
        </section>
        <Article>
          <section className='flex flex-col gap-14'>
            <div ref={ref4} className="flex flex-col gap-5 md:flex-row items-center ">
              <div className={`${isVisible4 ? "roll-in-blurred-left" : ''} w-full md:w-7/12 text-lg`}>
                <p className={defaultTextProp}>
                  É um prazer tê-lo conosco! Na PIPA, estamos dedicados a oferecer soluções inovadoras e personalizadas para atender às suas necessidades em tecnologia da informação. Nossa equipe de especialistas está pronta para ajudá-lo a impulsionar seus projetos e otimizar seus processos.Explore nossos serviços, descubra como podemos colaborar e fique por dentro das últimas tendências em TI. Se você tiver dúvidas ou quiser saber mais sobre como podemos ajudar sua empresa, não hesite em nos contatar. Agradecemos sua visita e esperamos construir um futuro digital brilhante juntos!
                </p>
              </div>
              <div className={`${isVisible4 ? "roll-in-blurred-right" : ''} w-full md:w-5/12 flex justify-center`}>
                <svg xmlns="http://www.w3.org/2000/svg" className={`${defaultSVGProp} w-32`} viewBox="0 0 16 16">
                  <path d="M8 1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1zm1 13.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0m2 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0M9.5 1a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM9 3.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0-.5.5M1.5 2A1.5 1.5 0 0 0 0 3.5v7A1.5 1.5 0 0 0 1.5 12H6v2h-.5a.5.5 0 0 0 0 1H7v-4H1.5a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5H7V2z" />
                </svg>
              </div>
            </div>
          </section>
        </Article>
        <Article classList='bg-teal-300 py-16'>
          <section className='flex flex-col gap-8 items-center'>
            <div>
              <H2 classList='text-teal-950 text-5xl md:text-8xl'>Parcerias</H2>
            </div>
            <div ref={ref5} className="flex flex-col md:flex-row md:h-48 items-stretch gap-12">
              <div className={`${isVisible5 ? "swing-in-left-fwd" : ''} delay-100 flex w-52 h-52 flex-col justify-center bg-teal-600 p-5 rounded-xl`}>
                <H2 classList="text-teal-50 text-center text-7xl">AVIS</H2>
              </div>
              <div className={`${isVisible5 ? "swing-in-top-fwd" : ''} delay-100 flex w-52 h-52 flex-col justify-center bg-teal-600 p-5 rounded-xl`}>
                <H2 classList="text-teal-50 text-center text-7xl">IOS</H2>
              </div>
              <div className={`${isVisible5 ? "swing-in-right-fwd" : ''} delay-100 flex w-52 h-52 flex-col justify-center bg-teal-600 p-5 rounded-xl`}>
                <H2 classList="text-teal-50 text-center text-7xl">DELL</H2>
              </div>
            </div>
          </section>
        </Article>
        <Article>
          <section className='flex flex-col gap-14'>
            <div ref={ref4} className="flex flex-col gap-5 md:flex-row items-center ">
              <div className={`${isVisible4 ? "roll-in-blurred-left" : ''} w-full text-lg`}>
                <p className={defaultTextProp}>
                  É um prazer tê-lo conosco! Na PIPA, estamos dedicados a oferecer soluções inovadoras e personalizadas para atender às suas necessidades em tecnologia da informação. Nossa equipe de especialistas está pronta para ajudá-lo a impulsionar seus projetos e otimizar seus processos.Explore nossos serviços, descubra como podemos colaborar e fique por dentro das últimas tendências em TI. Se você tiver dúvidas ou quiser saber mais sobre como podemos ajudar sua empresa, não hesite em nos contatar. Agradecemos sua visita e esperamos construir um futuro digital brilhante juntos!
                </p>
              </div>
            </div>
          </section>
        </Article>
      </Main>
      <Footer />
    </>
  )
}

export default Home;