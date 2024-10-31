import Header from "../components/containers/Header.js";
import Main from "../components/containers/Main.js";
import Footer from "../components/containers/Footer.js";
import "../App.css";
import { useTheme } from '../ThemeContext.js';
import { H1, H2 } from "../components/elements/Headings.js";
import Article from '../components/containers/Article.js';

function Home(): JSX.Element {
  const { theme } = useTheme();
  const defaultThemeProp = `${theme === 'dark' ? 'text-neutral-50' : 'text-neutral-950'}`;
  
  return (
    <>
      <Header />
      <Main>
        <div className='home-page-image bg-no-repeat bg-cover bg-fixed bg-bottom'>
          <div className='home-page-gradient h-full flex flex-col gap-5 items-center justify-center'>
            <h2 className='top-fade-in-anim text-5xl font-bold text-neutral-100'>PIPA</h2>
            <h3 className='bottom-fade-in-anim text-2xl text-neutral-100'>A sua consultoria de TI</h3>
          </div>
        </div>
        <Article>
          <section className='flex flex-col gap-2'>
            <H1 classList='text-teal-600 dark:text-teal-500 border-y-4 border-teal-600 dark:border-teal-500 text-center py-2 my-2'>Home</H1>
            <p className={defaultThemeProp}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas ducimus nihil dolore consectetur sit sunt? Doloremque quas minus earum illum cumque modi asperiores cupiditate beatae! Non quas tempora quibusdam obcaecati.
              Cupiditate quidem suscipit temporibus itaque, quasi ipsum voluptatem repudiandae, sunt est unde sit distinctio vero eveniet quia! Temporibus repellendus quis, quidem, qui sequi nesciunt praesentium sit ea nulla at quibusdam?
              Tenetur facere enim eum magni voluptate harum esse repellat iusto exercitationem, officiis neque laudantium ipsa architecto hic repellendus? Nisi itaque illo sed culpa consectetur, corporis nemo odio deserunt suscipit doloribus?
              Autem omnis vitae dolore laborum suscipit nisi repellat? Voluptatem nemo aliquam veniam vitae sed modi ab dolorem eveniet quis ex qui eaque recusandae beatae magnam illo dolores reiciendis, unde nam?
            </p>
            <p className={defaultThemeProp}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas ducimus nihil dolore consectetur sit sunt? Doloremque quas minus earum illum cumque modi asperiores cupiditate beatae! Non quas tempora quibusdam obcaecati.
              Cupiditate quidem suscipit temporibus itaque, quasi ipsum voluptatem repudiandae, sunt est unde sit distinctio vero eveniet quia! Temporibus repellendus quis, quidem, qui sequi nesciunt praesentium sit ea nulla at quibusdam?
              Tenetur facere enim eum magni voluptate harum esse repellat iusto exercitationem, officiis neque laudantium ipsa architecto hic repellendus? Nisi itaque illo sed culpa consectetur, corporis nemo odio deserunt suscipit doloribus?
              Autem omnis vitae dolore laborum suscipit nisi repellat? Voluptatem nemo aliquam veniam vitae sed modi ab dolorem eveniet quis ex qui eaque recusandae beatae magnam illo dolores reiciendis, unde nam?
            </p>
          </section>
        </Article>
        <Article classList='bg-teal-pattern py-5'>
        <section className='flex flex-col gap-2'>
          <H2 classList='text-teal-950'>Lorem Ipsum</H2>
            <p className='text-teal-950'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas ducimus nihil dolore consectetur sit sunt? Doloremque quas minus earum illum cumque modi asperiores cupiditate beatae! Non quas tempora quibusdam obcaecati.
              Cupiditate quidem suscipit temporibus itaque, quasi ipsum voluptatem repudiandae, sunt est unde sit distinctio vero eveniet quia! Temporibus repellendus quis, quidem, qui sequi nesciunt praesentium sit ea nulla at quibusdam?
              Tenetur facere enim eum magni voluptate harum esse repellat iusto exercitationem, officiis neque laudantium ipsa architecto hic repellendus? Nisi itaque illo sed culpa consectetur, corporis nemo odio deserunt suscipit doloribus?
              Autem omnis vitae dolore laborum suscipit nisi repellat? Voluptatem nemo aliquam veniam vitae sed modi ab dolorem eveniet quis ex qui eaque recusandae beatae magnam illo dolores reiciendis, unde nam?
            </p>
            <p className='text-teal-950'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas ducimus nihil dolore consectetur sit sunt? Doloremque quas minus earum illum cumque modi asperiores cupiditate beatae! Non quas tempora quibusdam obcaecati.
              Cupiditate quidem suscipit temporibus itaque, quasi ipsum voluptatem repudiandae, sunt est unde sit distinctio vero eveniet quia! Temporibus repellendus quis, quidem, qui sequi nesciunt praesentium sit ea nulla at quibusdam?
              Tenetur facere enim eum magni voluptate harum esse repellat iusto exercitationem, officiis neque laudantium ipsa architecto hic repellendus? Nisi itaque illo sed culpa consectetur, corporis nemo odio deserunt suscipit doloribus?
              Autem omnis vitae dolore laborum suscipit nisi repellat? Voluptatem nemo aliquam veniam vitae sed modi ab dolorem eveniet quis ex qui eaque recusandae beatae magnam illo dolores reiciendis, unde nam?
            </p>
          </section>
        </Article>
        <Article>
          <section className='flex flex-col gap-2'>
            <H2 classList={defaultThemeProp}>Lorem Ipsum</H2>
            <p className={defaultThemeProp}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas ducimus nihil dolore consectetur sit sunt? Doloremque quas minus earum illum cumque modi asperiores cupiditate beatae! Non quas tempora quibusdam obcaecati.
              Cupiditate quidem suscipit temporibus itaque, quasi ipsum voluptatem repudiandae, sunt est unde sit distinctio vero eveniet quia! Temporibus repellendus quis, quidem, qui sequi nesciunt praesentium sit ea nulla at quibusdam?
              Tenetur facere enim eum magni voluptate harum esse repellat iusto exercitationem, officiis neque laudantium ipsa architecto hic repellendus? Nisi itaque illo sed culpa consectetur, corporis nemo odio deserunt suscipit doloribus?
              Autem omnis vitae dolore laborum suscipit nisi repellat? Voluptatem nemo aliquam veniam vitae sed modi ab dolorem eveniet quis ex qui eaque recusandae beatae magnam illo dolores reiciendis, unde nam?
            </p>
            <p className={defaultThemeProp}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas ducimus nihil dolore consectetur sit sunt? Doloremque quas minus earum illum cumque modi asperiores cupiditate beatae! Non quas tempora quibusdam obcaecati.
              Cupiditate quidem suscipit temporibus itaque, quasi ipsum voluptatem repudiandae, sunt est unde sit distinctio vero eveniet quia! Temporibus repellendus quis, quidem, qui sequi nesciunt praesentium sit ea nulla at quibusdam?
              Tenetur facere enim eum magni voluptate harum esse repellat iusto exercitationem, officiis neque laudantium ipsa architecto hic repellendus? Nisi itaque illo sed culpa consectetur, corporis nemo odio deserunt suscipit doloribus?
              Autem omnis vitae dolore laborum suscipit nisi repellat? Voluptatem nemo aliquam veniam vitae sed modi ab dolorem eveniet quis ex qui eaque recusandae beatae magnam illo dolores reiciendis, unde nam?
            </p>
          </section>
        </Article>
      </Main>
      <Footer />
    </>
  )
}

export default Home;