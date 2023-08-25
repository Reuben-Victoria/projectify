// import { useState, MouseEvent } from "react";
import messageOutline from "@iconify/icons-mdi/message-outline";
import project24 from "@iconify/icons-octicon/project-24";
import taskIcon from "@iconify/icons-carbon/task";
import fileOutline from "@iconify/icons-basil/file-outline";
import { Feature, Footer, Header } from "components";
import dashboard from "assets/dashboard.jpg";
import girl from "assets/girl.jpg";
const Home = () => {
    // const [email, setEmail] = useState<string>('')

    // const handleOnChange = (e: MouseEvent<HTMLButtonElement>) => {
    //     setEmail(e.target.value)
    // }
  return (
    <div className='flex flex-col  w-full gap-y-10'>
      <section className='bg-brands-primary md:h-[600px]'>
        <div className='max-w-screen-xl mx-auto'>
          <Header />
          <main className='flex flex-col md:items-center items-start mt-8 md:mt-10 gap-y-5 md:gap-y-8 '>
            <h1 className='text-4xl text-left md:text-center text-white font-semibold font-sans'>
              Projectify Team Management
            </h1>
            <p className='text-light-text text-sm text-left md:text-center max-w-sm md:max-w-2xl font-sans'>
              We will help you develop every smallest thing into a big one for
              your company. We will help you develop every smallest thing into a
              big one for your company
            </p>
            <button className='bg-brands-navTextsColor bg-opacity-50 text-white py-3 px-5 rounded-sm'>
              Try For Free
            </button>
          </main>
        </div>
      </section>
      <div className='mt-[-260px] max-w-screen-xl mx-auto hidden md:block'>
        <img src={dashboard} alt='dashboard' className='max-w-2xl rounded-md' />
      </div>
      <section className='flex flex-col md:flex-row md:justify-between items-center w-full max-w-screen-xl mx-auto'>
        <div className='flex flex-col gap-y-5 flex-start'>
          <h4 className='font-sans font-bold text-3xl max-w-md text-left text-light-dark tracking-[0.5%]'>
            Why Projectify Team Management
          </h4>
          <p className='max-w-md text-left text-light-normal'>
            Develop a value websiteby finding a product identity that has value
            and branding to become characteristics of a company. We will
            facilitatethe business marketing of these products with our SEO
            experts so that they become a ready-to-use website and help sell a
            product from the company
          </p>
          <button className='bg-brands-primary py-3 text-white rounded-lg w-fit px-3'>
            Learn More
          </button>
        </div>
        <div>
          <img
            src={girl}
            alt='girl-holding-a-laptop'
            className='max-w-sm md:max-w-lg rounded-md'
          />
        </div>
      </section>
      <section className='max-w-screen-xl grid mx-auto md:gap-y-8 w-full'>
        <h4 className='font-sans font-bold text-3xl max-w-md text-left text-light-dark tracking-[0.5%]'>
          What's our Features
        </h4>
        <div className='grid grid-cols-1 md:grid-cols-4 w-full md:gap-x-8'>
          <Feature
            icon={messageOutline}
            title='Team Message'
            description='We will help you develop every smallest thing into a big one for
              your company. We will help you develop every smallest thing into a
              big one for your company'
          />
          <Feature
            icon={project24}
            title='Project Management'
            description='We will help you develop every smallest thing into a big one for
              your company. We will help you develop every smallest thing into a
              big one for your company'
          />
          <Feature
            icon={taskIcon}
            title='Task Scheduling'
            description='We will help you develop every smallest thing into a big one for
              your company. We will help you develop every smallest thing into a
              big one for your company'
          />
          <Feature
            icon={fileOutline}
            title='File Manager'
            description='We will help you develop every smallest thing into a big one for
              your company. We will help you develop every smallest thing into a
              big one for your company'
          />
        </div>
      </section>
      <section>
        <h1>Subscribe to our Newsletter</h1>
        <form>
            <input placeholder="Email Address"/>
        </form>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
