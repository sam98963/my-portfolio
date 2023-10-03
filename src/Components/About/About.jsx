export default function About(){
  return(
    <main id="about" className="w-screen h-auto lg:h-screen flex md:items-center justify-center bg-gradient-to-tr from-primary via-forth to-tertiary text-white pt-10 lg:pt-0">
      <section className="w-4/5 sm:h-4/5 h-3/5 flex flex-col sm:text-md text-sm">
        <h1 className="md:text-8xl text-6xl text-center sm:text-start">About Me</h1>
          <article className="w-full sm:w-3/5 h-fit pt-6 sm:pt-10 lg:pt-16 flex flex-col sm:text-start text-center">
          <h3 className="md:text-3xl text-2xl sm:no-underline underline">My Skills</h3>
            <section className="flex sm:flex-row flex-col">
              <p className="sm:pr-5 sm:pt-4 pt-2 flex-1">I take pride in my endless motivation, always eager to embrace new challenges and technologies to ensure the success of the project.</p>
              <p className="sm:px-5 sm:py-4 py-2 flex-1">My balanced combination of creative, logic and technical aptitude allows for delivery of practical and exciting solutions from a new perspective.</p>
            </section>
          </article>

          <article className="w-full sm:w-3/5 h-fit pt-6 sm:pt-10 lg:pt-16 flex flex-col self-end sm:text-end text-center">
          <h3 className="md:text-3xl text-2xl sm:no-underline underline">My Passions</h3>
            <section className="flex sm:flex-row flex-col">
              <p className="sm:px-5 sm:pt-4 pt-2 flex-1">Apart from parking up at my desk and typing away for a day, I love to get moving. Whether it be on walks, runs, swims, cycles or playing football, I love to get out and about!</p>
              <p className="sm:pl-5 sm:py-4 py-2 flex-1">Being creative is my other side. Whether its winging a recipe from a new cuisine or strumming away aimlessly on a guitar. It&apos;s great seeing where experimenting can can take me.</p>
            </section>
          </article>

          <article className="w-full sm:w-3/4 h-fit pt-6 sm:pt-10 lg:pt-16 flex flex-col sm:text-start text-center">
          <h3 className="md:text-3xl text-2xl sm:no-underline underline">My Stack</h3>
            <section className="flex flex-row md:text-[2.5rem] sm:text-4xl text-3xl flex-wrap pt-4 sm:justify-start justify-center">
              
            <i className="devicon-html5-plain colored pr-2 pb-5 transform scale-100 hover:scale-110 transition-transform duration-200"></i>
            
            <i className="devicon-css3-plain colored pr-2 transform scale-100 hover:scale-110 transition-transform duration-200"></i>
            
            <i className="devicon-javascript-plain colored pr-2 transform scale-100 hover:scale-110 transition-transform duration-200"></i>
            
            <i className="devicon-typescript-plain colored pr-2 transform scale-100 hover:scale-110 transition-transform duration-200"></i>
          
            <i className="devicon-java-plain colored pr-2 pb-5 transform scale-100 hover:scale-110 transition-transform duration-200"></i>
            
            <i className="devicon-postgresql-plain colored pr-2 transform scale-100 hover:scale-110 transition-transform duration-200"></i>
            
            <i className="devicon-react-original colored pr-2 transform scale-100 hover:scale-110 transition-transform duration-200"></i>
            
            <i className="devicon-nodejs-plain colored pr-2 transform scale-100 hover:scale-110 transition-transform duration-200"></i>
            
            <i className="devicon-express-original pr-2 pb-5 transform scale-100 hover:scale-110 transition-transform duration-200"></i>
            
            <i className="devicon-git-plain colored pr-2 transform scale-100 hover:scale-110 transition-transform duration-200"></i>
            
            <i className="devicon-github-original pr-2 transform scale-100 hover:scale-110 transition-transform duration-200"></i>
            
            <i className="devicon-figma-plain colored pr-2 transform scale-100 hover:scale-110 transition-transform duration-200"></i>
            
            <i className="devicon-trello-plain colored pr-2 transform scale-100 hover:scale-110 transition-transform duration-200"></i>
            
            <i className="devicon-jest-plain colored pr-2 transform scale-100 hover:scale-110 transition-transform duration-200"></i>
            
            <i className="devicon-mocha-plain colored pr-2 transform scale-100 hover:scale-110 transition-transform duration-200"></i>

            <i className="devicon-unrealengine-original pr-2 transform scale-100 hover:scale-110 transition-transform duration-200"></i>
            
            </section>
          </article>

      </section>
    </main>
  )
}