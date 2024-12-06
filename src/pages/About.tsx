import Header from "../components/containers/Header.js";
import Main from "../components/containers/Main.js";
import Footer from "../components/containers/Footer.js";
import { H1, H2, H3, H4 } from "../components/elements/Headings.js";
import Article from '../components/containers/Article.js';
import { useTheme } from '../ThemeContext.js';
import { useRef } from "react";
import useIsVisible from "./Other.js";


function About(): JSX.Element {
  const { theme } = useTheme();
  const defaultThemeProp = `${theme === 'dark' ? 'text-neutral-50' : 'text-neutral-950'}`;
  const ref1: any = useRef();
  const isVisible1 = useIsVisible(ref1);
  return (
    <>
      <Header />
      <Main>
        <Article classList='my-10'>
          <section className='flex flex-col gap-2'>
            <H1 classList='text-teal-600 text-teal-500 border-y-4 border-teal-600 dark:border-teal-500 text-center py-2 my-2'>Sobre Nós</H1>
            <p className={defaultThemeProp}>A <strong>PIPA – Periferia Inova e Preserva o Ambiente</strong> é uma empresa de consultoria de TI dedicada a oferecer soluções inovadoras e sustentáveis, com o objetivo de transformar e otimizar processos empresariais. Nosso trabalho é guiado pela missão de promover a inovação tecnológica enquanto respeitamos o meio ambiente e contribuímos para o desenvolvimento das comunidades.</p>
            <p className={defaultThemeProp}>Com uma equipe experiente, buscamos criar um futuro mais sustentável e tecnológico, oferecendo soluções que equilibram eficiência e responsabilidade social e ambiental.</p>
          </section>
          <section className='flex flex-col gap-2'>
            <H2 classList={defaultThemeProp + ' my-4'}>História</H2>
            <p className={defaultThemeProp}>
              A PIPA nasceu do reencontro de quatro jovens amigos da Brasilândia, São Paulo. Maria Oliveira, Ryan Santos, João Pereira e Giovanna Souza se conheceram na Escola Prof. Jair Toledo Xavier, onde desenvolveram uma amizade que resistiu à distância. Mesmo após seguirem caminhos distintos no Ensino Médio, devido a questões econômicas e sociais que impactaram cada um deles e levaram suas famílias a tomarem rumos diferentes, mantiveram-se unidos, encontrando-se regularmente para trocar ideias e apoiar-se mutuamente.
            </p>
            <p className={defaultThemeProp}>
              Em um desses encontros, Maria compartilhou suas dificuldades no mercado de trabalho. Como profissional de tecnologia, sentia que o ambiente corporativo oferecia poucas oportunidades para talentos das periferias. Ryan, que havia seguido no bairro e apoiava o negócio de reciclagem da família, comentou sobre o crescente problema do descarte inadequado de eletrônicos. João, sensível à situação dos amigos e inspirado por um desejo de mudança, propôs criar uma empresa voltada para consultoria tecnológica e sustentabilidade, que empregasse e capacitasse pessoas da periferia.
            </p>
            <p className={defaultThemeProp}>
              Com a sugestão de Giovanna, o nome “PIPA” foi escolhido, a pipa sendo uma tecnologia simples e inovadora, por ser feita de em sua maioria de papel e ainda assim cumprir um ato desafiador. Sendo um elemento característico da periferia, reflete simplicidade e resiliência, provando que o improvável chega as alturas.
            </p>
            <p className={defaultThemeProp}>
              Assim, a PIPA surgiu como uma empresa que não só leva a tecnologia à periferia, mas também cria oportunidades para que talentos locais ascendam profissionalmente, mantendo o compromisso com a sustentabilidade e a inovação. A identidade visual com as cores laranja e verde água representa o entusiasmo e a esperança de um futuro mais inclusivo e ambientalmente responsável.
            </p>
          </section>
        </Article>
        <Article classList='bg-neutral-300 py-16'>
          <section className='flex flex-col gap-8 items-center'>
            <div>
              <H2 classList='text-neutral-950 text-8xl'>Nossos ODSs</H2>
            </div>
          <div ref={ref1} className="flex flex-col md:flex-row items-start gap-12">
              <div className={`${isVisible1 ? "delay-50 swing-in-top-fwd" : 'swing-out-right-fwd'} flex w-48 min-h-48 flex-col rounded-xl gap-5`}>
                <div id="ods-bg-color-5" className="flex-1 flex p-5 justify-center rounded-xl">
                  <img src="https://brasil.un.org/profiles/undg_country/themes/custom/undg/images/SDGs/images-only/png/SDG-5.png" alt="" />
                </div>
                <H3 classList="text-neutral-900 text-center text-7xl">Igualdade de Gênero</H3>
              </div>
              <div className={`${isVisible1 ? "delay-150 swing-in-top-fwd" : 'swing-out-right-fwd'} flex w-48 min-h-48 flex-col rounded-xl gap-5`}>
                <div id="ods-bg-color-8" className="flex-1 flex p-5 justify-center rounded-xl">
                  <img src="https://brasil.un.org/profiles/undg_country/themes/custom/undg/images/SDGs/images-only/png/SDG-8.png" alt="" />
                </div>
                <H3 classList="text-neutral-900 text-center text-7xl ods-color-8">Igualdade de Gênero</H3>
              </div>
              <div className={`${isVisible1 ? "delay-300 swing-in-top-fwd" : 'swing-out-right-fwd'} flex w-48 min-h-48 flex-col rounded-xl gap-5`}>
                <div id="ods-bg-color-15" className="flex-1 flex p-5 justify-center rounded-xl">
                  <img src="https://brasil.un.org/profiles/undg_country/themes/custom/undg/images/SDGs/images-only/png/SDG-15.png" alt="" />
                </div>
                <H3 classList="text-neutral-900 text-center text-7xl ods-color-15 ">Igualdade de Gênero</H3>
              </div>
            </div>
          </section>
        </Article>
        <Article>
          <section className='flex flex-col gap-2' id='mission'>
            <H2 classList={defaultThemeProp + ' my-4'}>Missão</H2>
            <p className={defaultThemeProp}> Nossa missão é promover a consultoria estratégica para empresas periféricas, auxiliando-as a alcançar seu potencial máximo no mercado. Acreditamos no poder da inovação e da criatividade que nasce fora dos grandes centros, e por isso buscamos transformar essas empresas em protagonistas de seu próprio crescimento, oferecendo soluções personalizadas e acessíveis que atendam às suas necessidades específicas.</p>
            <p className={defaultThemeProp}> Além disso, nos dedicamos a dar oportunidade a talentos periféricos, reconhecendo que o verdadeiro potencial está em lugares diversos. Por meio de nossa atuação, buscamos proporcionar um ambiente de valorização e desenvolvimento para profissionais que, muitas vezes, ficam à margem do mercado formal. Acreditamos que ao unir oportunidades e talentos, podemos construir um futuro mais justo e próspero para todos.</p>
          </section>
          <section className='flex flex-col gap-2' id='vision'>
            <H2 classList={defaultThemeProp + ' my-4'}>Visão</H2>
            <p className={defaultThemeProp}>Nos próximos cinco anos, nossa meta é conquistar reconhecimento pelas iniciativas sustentáveis, inovadoras e humanizadas que implementamos, refletindo nosso compromisso com a transformação positiva do meio ambiente e da sociedade. Focaremos em adotar práticas responsáveis que preservem recursos naturais, impulsionem a inovação de maneira ética e promovam o bem-estar social. Através de soluções criativas e inclusivas, buscamos gerar impacto positivo nas comunidades, inspirando outras organizações a seguir nosso exemplo de responsabilidade e compromisso com um futuro mais justo e equilibrado.</p>
          </section>
          <section className='flex flex-col gap-2' id='values'>
            <H2 classList={defaultThemeProp + ' my-4'}>Valores</H2>
            <ul className='flex flex-col gap-2 list-disc list-inside pl-8'>
              <li className={defaultThemeProp}><strong>Sustentabilidade</strong>: Refere-se ao compromisso com o uso responsável dos recursos naturais, buscando preservar o meio ambiente para as gerações futuras. Envolve práticas que minimizam impactos negativos, promovem a eficiência no consumo e incentivam o uso de energias renováveis e materiais ecológicos;</li>
              <li className={defaultThemeProp}><strong>Responsabilidade Social</strong>: Refere-se à atuação ética e consciente das organizações e indivíduos em relação ao bem-estar da sociedade. Implica em ações que promovem a inclusão, a justiça social, o respeito aos direitos humanos e a contribuição para o desenvolvimento comunitário e educacional;</li>
              <li className={defaultThemeProp}><strong>Inovação</strong>: Refere-se à busca constante por novas ideias, processos, produtos ou soluções que agreguem valor e tragam melhorias. Implica em criatividade, adaptação às mudanças e a implementação de tecnologias e abordagens avançadas para solucionar problemas de maneira mais eficiente e eficaz.</li>
            </ul>
          </section>
        </Article>
      </Main>
      <Footer />

    </>
  )
}

export default About;