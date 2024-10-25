import React from 'react'
import Header from "../components/containers/Header";
import Main from "../components/containers/Main";
import Footer from "../components/containers/Footer";

import { H1, H2 } from "../components/elements/Headings";
import Article from '../components/containers/Article';

function About(): JSX.Element {
  return (
    <>
      <Header />
      <Main>
        <Article classList='my-10'>
          <section className='flex flex-col gap-2'>
            <H1 classList='text-teal-600 dark:text-teal-500 border-y-4 border-teal-600 dark:border-teal-500 text-center py-2 my-2'>Sobre Nós</H1>
            <p className='text-neutral-950 dark:text-neutral-100'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus sequi repudiandae vero optio deserunt, ullam a reiciendis labore velit fuga, laudantium dolorem dolorum nihil est quam molestias minima recusandae unde?
            </p>
          </section>
          <section className='flex flex-col gap-2'>
            <H2 classList='text-neutral-950 dark:text-neutral-100 my-4'>História</H2>
            <p className='text-neutral-950 dark:text-neutral-100'>
              4 amigos se conheceram durante Fundamental I e II em uma escola no bairro Brasilândia, porém por questões próprias no Ensino Médio se separaram e mudaram de escola cada um indo para uma região diferente de São Paulo, exceto Ryan, que continuou na Brasilândia com sua família que realiza trabalho de reciclagem. Os 4 não perderam o contato até idade adulta, mantendo as relações se encontrando com frequência. Durante um desses encontros discutindo sobre problemas e ideias, Maria compartilhou que estava desempregada e que não via um investimento ou oportunidades para profissionais de tecnologia nas periferias, Ryan viu que o descarte de eletrônicos não era realizado corretamente. João, vendo toda situação, propôs uma união, a fim de criar uma empresa de tecnologia visando contratar pessoas da periferia e de favelas, com projetos sustentáveis. Giovanna sugeriu que para o nome empresa, PIPA seria interessante, é um elemento característico da periferia e das favelas, que é uma inovação, por ser feito com materiais simples, e que mesmo assim chegam as alturas. O grupo entrou em consenso e definiu como cores principais o laranja, e verde água.
            </p>
          </section>
          <section className='flex flex-col gap-2' id='mission'>
            <H2 classList='text-neutral-950 dark:text-neutral-100 my-4'>Missão</H2>
            <p className='text-neutral-950 dark:text-neutral-100'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, vel eligendi rerum quis iure debitis porro blanditiis distinctio, quibusdam ex, et tempora aliquam sequi eos praesentium modi placeat architecto quo.
              Sint nemo ullam architecto iure aperiam corporis explicabo officia? Nam quos nostrum fugiat consequatur assumenda soluta pariatur quaerat, veniam debitis harum quidem laudantium officiis possimus eveniet sit sunt vel amet?
              Quasi excepturi fugiat tenetur, nemo laboriosam possimus quam id. Eius at ex libero, eos voluptas similique alias, voluptates unde consequatur quibusdam error corrupti fugit laudantium tempora voluptatibus dolore modi rem.
              Eius omnis ex inventore ad quaerat. Velit laboriosam vitae consectetur maiores necessitatibus vero vel magnam dolor dolore placeat ex, reprehenderit distinctio ipsam deserunt aliquid alias fuga saepe. Illum, commodi voluptatibus.</p>
          </section>
          <section className='flex flex-col gap-2' id='vision'>
            <H2 classList='text-neutral-950 dark:text-neutral-100 my-4'>Visão</H2>
            <p className='text-neutral-950 dark:text-neutral-100'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse doloremque recusandae reprehenderit veritatis numquam! Porro tenetur quaerat neque saepe dicta numquam! Et asperiores repellat cum aspernatur perspiciatis quo officiis dolore!
              Ea quibusdam, quisquam ex rem libero modi reprehenderit, laboriosam dolorum doloremque asperiores eum! Nihil aut vel nesciunt cupiditate voluptates nisi, voluptas ea possimus minus at enim? Nulla voluptas eaque totam.
              Debitis sequi voluptatum ad cumque culpa, accusamus dolores aliquam ipsam dolor id fugit in ut enim necessitatibus. Quisquam deleniti, quod consequuntur nobis adipisci earum beatae nam vel, iste eum repellat!
              Molestias fugit natus iusto ad expedita tempora perspiciatis, impedit omnis earum sapiente eveniet sit doloribus sed enim aliquam culpa suscipit soluta quo, excepturi in amet corrupti quasi vero? Excepturi, aut!</p>
          </section>
          <section className='flex flex-col gap-2' id='values'>
            <H2 classList='text-neutral-950 dark:text-neutral-100 my-4'>Valores</H2>
            <ul className='flex flex-col gap-2 list-disc list-inside pl-8'>
              <li className='text-neutral-950 dark:text-neutral-100'><strong>Coletividade</strong>: A importância de agir em conjunto, promovendo a colaboração e o fortalecimento de laços entre os membros de uma comunidade, onde o sucesso de um beneficia a todos.</li>
              <li className='text-neutral-950 dark:text-neutral-100'><strong>Sustentabilidade</strong>: O compromisso em adotar práticas que garantam a preservação dos recursos naturais e a saúde do planeta, assegurando um futuro viável para as próximas gerações.</li>
              <li className='text-neutral-950 dark:text-neutral-100'><strong>Inovação</strong>: A busca constante por novas ideias e soluções criativas que melhorem processos, produtos e serviços, impulsionando o progresso e a competitividade.</li>
              <li className='text-neutral-950 dark:text-neutral-100'><strong>Inclusão</strong>: A promoção de um ambiente onde todas as vozes são ouvidas e respeitadas, garantindo oportunidades iguais e valorizando a diversidade em todas as suas formas.</li>
              <li className='text-neutral-950 dark:text-neutral-100'><strong>Assiduidade</strong>: A valorização do comprometimento e da responsabilidade, refletindo a importância de estar presente e participar ativamente nas atividades e iniciativas.</li>
              <li className='text-neutral-950 dark:text-neutral-100'><strong>Respeito</strong>: A base de relações saudáveis, onde as opiniões, sentimentos e direitos de cada indivíduo são valorizados, promovendo um ambiente harmonioso e produtivo.</li>
              <li className='text-neutral-950 dark:text-neutral-100'><strong>Organização</strong>: A capacidade de estruturar e planejar ações de forma eficaz, garantindo que recursos e esforços sejam utilizados da melhor maneira possível para alcançar objetivos comuns.</li>
            </ul>
          </section>
        </Article>
      </Main>
      <Footer />

    </>
  )
}

export default About;