import Header from "../components/containers/Header.js";
import Main from "../components/containers/Main.js";
import Footer from "../components/containers/Footer.js";
import { H1, H2, H3 } from "../components/elements/Headings.js";
import Article from '../components/containers/Article.js';
import { useTheme } from '../ThemeContext.js';
import { Link } from 'react-router-dom';


function Contact(): JSX.Element {
  const { theme } = useTheme();
  const textThemeProps = `${theme === 'dark' ? 'text-neutral-50' : 'text-neutral-950'}`;
  const backgroundThemeProps = `${theme === 'dark' ? 'bg-teal-800' : 'bg-teal-400'}`;
  const inputProps: string = `flex-1 p-2 border-1 ${theme === 'dark' ? 'bg-teal-950 border-teal-800' : 'bg-teal-50 border-teal-200'} rounded-xl focus:border-teal-500 focus:text-teal-500 focus:ring-0 focus:ring-transparent focus:outline-none focus:ring-offset-0 focus:ring-offset-transparent ${textThemeProps}`;
  const linkProps:string = "font-semibold underline text-orange-600 hover:text-orange-800 ";
  
  return (
    <>
      <Header />
      <Main>
        <Article classList='my-10'>
          <section className='flex flex-col gap-2'>
            <H1 classList='text-teal-600 dark:text-teal-500 border-y-4 border-teal-600 dark:border-teal-500 text-center py-2 my-2'>Contato</H1>
            <p className={ textThemeProps }>Na PIPA, estamos sempre prontos para ajudar você a encontrar as melhores soluções para suas necessidades em tecnologia. Seja para esclarecer dúvidas, solicitar uma consultoria personalizada ou discutir como podemos impulsionar o seu negócio com nossas soluções de TI, entre em contato conosco!</p>
            <p className={ textThemeProps }>Preencha o formulário abaixo ou escolha a forma de contato que mais se adequa a você. Nossa equipe especializada responderá o mais breve possível.</p>
          </section>
        </Article>
          <Article classList={`${backgroundThemeProps} py-5`}>
            <H2 classList={`${backgroundThemeProps} my-4`}>Formulário de Envio</H2>
            <form action="" method="post" className='flex flex-col gap-4'>
              <label htmlFor="" className='flex items-center gap-2'>
                <span className='text-red-500'>*</span>
                <span className={ textThemeProps + " font-bold" }>Nome:</span>
              </label>
              <input type="text" name="" id="" className={inputProps} />
              <label htmlFor="" className='flex items-center gap-2'>
                <span className='text-red-500'>*</span>
                <span className={ textThemeProps + " font-bold" }>E-mail:</span>
              </label>
              <input type="text" name="" id="" className={inputProps} />
              <label htmlFor="" className=''>
                <span className={ textThemeProps + " font-bold" }>Telefone:</span>
              </label>
              <input type="text" name="" id="" className={inputProps} />
              <label htmlFor="" className='flex items-center gap-2'>
                <span className='text-red-500'>*</span>
                <span className={ textThemeProps + " font-bold" }>Motivo de Contato:</span>
              </label>
              <select name="" id="" className={inputProps}>
                <option value="">Suporte técnico</option>
                <option value="">Consultoria de desenvolvimento</option>
                <option value="">Dúvidas</option>
                <option value="">Imprensa</option>
                <option value="">Reclamação</option>
                <option value="">Sugestões</option>
              </select>
              <label htmlFor="" className='flex items-center gap-2'>
                <span className='text-red-500'>*</span>
                <span className={ textThemeProps + " font-bold" }>Mensagem:</span>
              </label>
              <textarea name="" id="" className={inputProps} maxLength={200}></textarea>
              <input type="submit" value="Enviar" className='p-2 bg-orange-600 hover:bg-orange-500 cursor-pointer text-white focus:bg-orange-500 rounded-xl' />
            </form>
          </Article>
          <Article>

          <section className='flex flex-col gap-5 mt-5'>
            <H2 classList={ textThemeProps }>Outros Canais de Contato</H2>
            <div>
              <H3 classList={ textThemeProps }>Telefone:</H3>
              <ul className={textThemeProps  + ' flex flex-col gap-2 list-disc list-inside pt-2 pl-8'}>
                <li><Link className={ linkProps } to={"tel:+551112345678"}>+55 (11) 1234-5678</Link></li>
                <li className={ textThemeProps }>De segunda a sexta, das 9h às 18h.</li>
              </ul>
            </div>
            <div>
              <H3 classList={ textThemeProps }>E-mail:</H3>
              <ul className={textThemeProps  + ' flex flex-col gap-2 list-disc list-inside pt-2 pl-8'}>
                <li className={ textThemeProps }><Link className={ linkProps } to="mailto:contato@consultools.com.br">contato@consultools.com.br</Link></li>
              </ul>
            </div>
            <div>
              <H3 classList={ textThemeProps }>Endereço:</H3>
              <ul className={textThemeProps  + ' flex flex-col gap-2 list-disc list-inside pt-2 pl-8'}>
                <li className={ textThemeProps }>Av. Inovação, 456 – Sala 1001 São Paulo, SP – 01000-000</li>
              </ul>
            </div>
            <div>
              <H3 classList={ textThemeProps }>Redes Sociais</H3>
              <p className={ textThemeProps }>Fique por dentro de nossas novidades e acompanhe as últimas tendências em TI:</p>
              <nav>
                <ul className={textThemeProps  + ' flex flex-col gap-2 list-disc list-inside pt-2 pl-8'}>
                  <li><Link className={ linkProps } target='_blank' to="" >LinkedIn</Link></li>
                  <li><Link className={ linkProps } target='_blank' to="" >Twitter</Link></li>
                  <li><Link className={ linkProps } target='_blank' to="" >Instagram</Link></li>
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