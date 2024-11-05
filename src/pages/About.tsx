import Header from "../components/containers/Header.js";
import Main from "../components/containers/Main.js";
import Footer from "../components/containers/Footer.js";
import { H1, H2, H4 } from "../components/elements/Headings.js";
import Article from '../components/containers/Article.js';
import { useTheme } from '../ThemeContext.js';


function About(): JSX.Element {
  const { theme } = useTheme();
  const defaultThemeProp = `${theme === 'dark' ? 'text-neutral-50' : 'text-neutral-950'}`;

  return (
    <>
      <Header />
      <Main>
        <Article classList='my-10'>
          <section className='flex flex-col gap-2'>
            <H1 classList='text-teal-600 text-teal-500 border-y-4 border-teal-600 dark:border-teal-500 text-center py-2 my-2'>Sobre Nós</H1>
            <p className={defaultThemeProp}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus sequi repudiandae vero optio deserunt, ullam a reiciendis labore velit fuga, laudantium dolorem dolorum nihil est quam molestias minima recusandae unde?
            </p>
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
          <section className='flex flex-col gap-2' id='mission'>
            <H2 classList={defaultThemeProp + ' my-4'}>Missão</H2>
            <p className={defaultThemeProp}>Continuar a promovendo nossos projetos de capacitação nas periferias, oferecendo oportunidades de aprendizado prático. Enquanto há a aplicação e desenvolvimento de planos de sustentabilidade as nossas atividades.</p>
          </section>
          <section className='flex flex-col gap-2' id='vision'>
            <H2 classList={defaultThemeProp + ' my-4'}>Visão</H2>
            <p className={defaultThemeProp}>Nos próximos cinco anos, uma de nossas metas a serem alcançadas são: adquirir reconhecimento por nossas trabalhos sustentáveis, inovadoras e humanizadas  comprometida.</p>
          </section>
          <section className='flex flex-col gap-2' id='values'>
            <H2 classList={defaultThemeProp + ' my-4'}>Valores</H2>
            <ul className='flex flex-col gap-2 list-disc list-inside pl-8'>
              <li className={defaultThemeProp}><strong>Coletividade</strong>: A importância de agir em conjunto, promovendo a colaboração e o fortalecimento de laços entre os membros de uma comunidade, onde o sucesso de um beneficia a todos.</li>
              <li className={defaultThemeProp}><strong>Sustentabilidade</strong>: O compromisso em adotar práticas que garantam a preservação dos recursos naturais e a saúde do planeta, assegurando um futuro viável para as próximas gerações.</li>
              <li className={defaultThemeProp}><strong>Inovação</strong>: A busca constante por novas ideias e soluções criativas que melhorem processos, produtos e serviços, impulsionando o progresso e a competitividade.</li>
              <li className={defaultThemeProp}><strong>Inclusão</strong>: A promoção de um ambiente onde todas as vozes são ouvidas e respeitadas, garantindo oportunidades iguais e valorizando a diversidade em todas as suas formas.</li>
              <li className={defaultThemeProp}><strong>Assiduidade</strong>: A valorização do comprometimento e da responsabilidade, refletindo a importância de estar presente e participar ativamente nas atividades e iniciativas.</li>
              <li className={defaultThemeProp}><strong>Respeito</strong>: A base de relações saudáveis, onde as opiniões, sentimentos e direitos de cada indivíduo são valorizados, promovendo um ambiente harmonioso e produtivo.</li>
              <li className={defaultThemeProp}><strong>Organização</strong>: A capacidade de estruturar e planejar ações de forma eficaz, garantindo que recursos e esforços sejam utilizados da melhor maneira possível para alcançar objetivos comuns.</li>
            </ul>
          </section>
        </Article>
        <Article classList='bg-orange-300 py-16'>
        <section className='flex flex-col gap-8 items-center'>
          <div>
            <H2 classList='text-orange-800 text-8xl'>Nossas ODSs</H2>
          </div>
          <div className="flex h-48 items-stretch gap-12">
            <div className="flex w-52 h-52 flex-col justify-center bg-orange-400 p-5 rounded-xl">
              <H2 classList="text-orange-900 text-center text-7xl">5</H2>
            </div>
            <div className="flex w-52 h-52 flex-col justify-center bg-orange-400 p-5 rounded-xl">
              <H2 classList="text-orange-900 text-center text-7xl">8</H2>
            </div>
              <div className="flex w-52 h-52 flex-col justify-center bg-orange-400 p-5 rounded-xl">
              <H2 classList="text-orange-900 text-center text-7xl">15</H2>
            </div>
          </div>
          </section>
        </Article>
      </Main>
      <Footer />

    </>
  )
}

export default About;