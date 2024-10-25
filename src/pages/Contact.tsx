import React from 'react'
import Header from "../components/containers/Header";
import Main from "../components/containers/Main";
import Footer from "../components/containers/Footer";

import { H1, H2, H3 } from "../components/elements/Headings";
import Article from '../components/containers/Article';
import { Link } from 'react-router-dom';

function Contact(): JSX.Element {
  return (
    <>
      <Header />
      <Main>
        <Article classList='my-10'>
          <section className='flex flex-col gap-2'>
            <H1 classList='text-teal-600 dark:text-teal-500 border-y-4 border-teal-600 dark:border-teal-500 text-center py-2 my-2'>Contato</H1>
            <p className='text-neutral-950 dark:text-neutral-100'>Na PIPA, estamos sempre prontos para ajudar você a encontrar as melhores soluções para suas necessidades em tecnologia. Seja para esclarecer dúvidas, solicitar uma consultoria personalizada ou discutir como podemos impulsionar o seu negócio com nossas soluções de TI, entre em contato conosco!</p>
            <p className='text-neutral-950 dark:text-neutral-100'>Preencha o formulário abaixo ou escolha a forma de contato que mais se adequa a você. Nossa equipe especializada responderá o mais breve possível.</p>
          </section>
        </Article>
          <Article classList='bg-neutral-200 dark:bg-neutral-800 py-5'>
            <H2 classList='text-neutral-950 dark:text-neutral-100 my-4'>Formulário de Envio</H2>
            <form action="" method="post" className='flex flex-col gap-4'>
              <label htmlFor="" className='flex items-center gap-2'>
                <span className='text-red-500'>*</span>
                Nome:
              </label>
              <input type="text" name="" id="" className='flex-1 p-2 border-2 border-teal-50 dark:border-teal-950 focus:border-teal-400 rounded-xl transition-colors duration-250 outline-none' />
              <label htmlFor="" className='flex items-center gap-2'>
                <span className='text-red-500'>*</span>
                E-mail:
              </label>
              <input type="text" name="" id="" className='flex-1 p-2 border-2 border-teal-50 dark:border-teal-950 focus:border-teal-400 rounded-xl transition-colors duration-250 outline-none' />
              <label htmlFor="" className=''>
                Telefone:
              </label>
              <input type="text" name="" id="" className='flex-1 p-2 border-2 border-teal-50 dark:border-teal-950 focus:border-teal-400 rounded-xl transition-colors duration-250 outline-none' />
              <label htmlFor="" className='flex items-center gap-2'>
                <span className='text-red-500'>*</span>
                Motivo de Contato:
              </label>
              <select name="" id="" className='flex-1 p-2 border-2 border-teal-50 dark:border-teal-950 focus:border-teal-400 rounded-xl transition-colors duration-250 outline-none'>
                <option value="">Suporte técnico</option>
                <option value="">Consultoria de desenvolvimento</option>
                <option value="">Dúvidas</option>
                <option value="">Imprensa</option>
                <option value="">Reclamação</option>
                <option value="">Sugestões</option>
              </select>
              <label htmlFor="" className='flex items-center gap-2'>
                <span className='text-red-500'>*</span>
                Mensagem:
              </label>
              <textarea name="" id="" className='flex-1 p-2 border-2 border-teal-50 dark:border-teal-950 focus:border-teal-400 rounded-xl transition-colors duration-250 outline-none' maxLength={200}></textarea>
              <input type="submit" value="Enviar" className='p-2 bg-orange-600 hover:bg-orange-500 focus:bg-orange-500 rounded-xl transition-colors duration-300' />
            </form>
          </Article>
          <Article>

          <section className='flex flex-col gap-5 mt-5'>
            <H2>Outros Canais de Contato</H2>
            <div>
              <H3>Telefone:</H3>
              <ul className='flex flex-col gap-2 list-disc list-inside pt-2 pl-8'>
                <li><Link className="transition-colors duration-250 font-black underline text-blue-700" to={"tel:+551112345678"}>+55 (11) 1234-5678</Link></li>
                <li>De segunda a sexta, das 9h às 18h.</li>
              </ul>
            </div>
            <div>
              <H3>E-mail:</H3>
              <ul className='flex flex-col gap-2 list-disc list-inside pt-2 pl-8'>
                <li><Link className="transition-colors duration-250 font-black underline text-blue-700" to="mailto:contato@consultools.com.br">contato@consultools.com.br</Link></li>
              </ul>
            </div>
            <div>
              <H3>Endereço:</H3>
              <ul className='flex flex-col gap-2 list-disc list-inside pt-2 pl-8'>
                <li>Av. Inovação, 456 – Sala 1001 São Paulo, SP – 01000-000</li>
              </ul>
            </div>
            <div>
              <H3>Redes Sociais</H3>
              <p>Fique por dentro de nossas novidades e acompanhe as últimas tendências em TI:</p>
              <nav>
                <ul className=' flex flex-col gap-2 list-disc list-inside pt-2 pl-8'>
                  <li><Link to="" >LinkedIn</Link></li>
                  <li><Link to="" >Twitter</Link></li>
                  <li><Link to="" >Instagram</Link></li>
                </ul>
              </nav>
            </div>
          </section>
          </Article>
      </Main>
      <Footer />
    </>
  )
}

export default Contact;