export default function About(){
  return(
    <main className="w-screen h-auto lg:h-screen flex md:items-center justify-center bg-gradient-to-tr from-primary via-forth to-tertiary text-white">
      <section className="w-4/5 sm:h-4/5 h-3/5 flex flex-col sm:text-md text-sm">
        <h1 className="sm:text-8xl text-6xl">About Me</h1>
        
        
        
        <article className="w-full sm:w-3/5 h-fit pt-6 sm:pt-16 flex flex-col sm:text-start text-center">
        <h3 className="sm:text-3xl text-2xl">My Skills</h3>
          <section className="flex sm:flex-row flex-col">
            <p className="sm:pr-5 sm:pt-4 pt-2 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet lacus posuere arcu vulputate accumsan. Vestibulum congue tellus sed est bibendum, id ullamcorper nunc bibendum. Nunc egestas dapibus pharetra. Integer.</p>
            <p className="sm:px-5 sm:py-4 py-2 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet lacus posuere arcu vulputate accumsan. Vestibulum congue tellus sed est bibendum, id ullamcorper nunc bibendum. Nunc egestas dapibus pharetra. Integer.</p>
          </section>
        </article>

        <article className="w-full sm:w-3/5 h-fit pt-6 sm:pt-16 flex flex-col self-end sm:text-end text-center">
        <h3 className="sm:text-3xl text-2xl">My Passions</h3>
          <section className="flex sm:flex-row flex-col">
            <p className="sm:px-5   sm:pt-4 pt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet lacus posuere arcu vulputate accumsan. Vestibulum congue tellus sed est bibendum, id ullamcorper nunc bibendum. Nunc egestas dapibus pharetra. Integer.</p>
            <p className="sm:pl-5   sm:py-4 py-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet lacus posuere arcu vulputate accumsan. Vestibulum congue tellus sed est bibendum, id ullamcorper nunc bibendum. Nunc egestas dapibus pharetra. Integer.</p>
          </section>
        </article>

        <article className="w-full sm:w-3/5 h-fit pt-6 sm:pt-16 flex flex-col sm:text-start text-center">
        <h3 className="sm:text-3xl text-2xl">My Stack</h3>
          <section className="flex flex-row md:text-[2.5rem] sm:text-4xl text-3xl flex-wrap ">
            
          <i className="devicon-html5-plain colored pr-2"></i>
          
          <i className="devicon-css3-plain colored pr-2"></i>
          
          <i className="devicon-javascript-plain colored pr-2"></i>
          
          <i className="devicon-typescript-plain colored pr-2"></i>
         
          <i className="devicon-java-plain colored pr-2"></i>
          
          <i className="devicon-postgresql-plain colored pr-2"></i>
          
          <i className="devicon-react-original colored pr-2"></i>
          
          <i className="devicon-nodejs-plain colored pr-2"></i>
          
          <i className="devicon-express-original pr-2"></i>
          
          <i className="devicon-git-plain colored pr-2"></i>
          
          <i className="devicon-github-original pr-2"></i>
          
          <i className="devicon-figma-plain colored pr-2"></i>
          
          <i className="devicon-trello-plain colored pr-2"></i>
          
          <i className="devicon-jest-plain colored pr-2"></i>
          
          <i className="devicon-mocha-plain colored pr-2"></i>

          <i className="devicon-unrealengine-original pr-2"></i>
          
          </section>
        </article>

      </section>
    </main>
  )
}