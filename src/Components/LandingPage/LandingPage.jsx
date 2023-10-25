import Header from "../Header/Header"
import LogoAnimation from "../LogoAnimation/LogoAnimation"
export default function LandingPage(){
  return(
    <main className="h-fit lg:h-screen w-screen bg-gradient-to-tr from-primary via-forth to-tertiary text-secondary flex flex-col">
      <Header />
      <section className="w-full h-full flex flex-col text-start sm:p-15 p-5 sm:p-10 md:pt-10">
        <article>
          <h3 className="sm:text-2xl md:text-3xl lg:text-4xl text-2xl w-4/5">Musician, Triathlete and <span className="underline underline-offset-6 text-tertiary">Developer.</span></h3>
          <h1 className="sm:text-6xl md:text-7xl lg:text-8xl text-4xl w-full font-medium">
            Samuel Williamson
          </h1>
        </article>
        <article className="flex-col items-center flex-grow flex lg:flex-row-reverse">
          <LogoAnimation />
          <div className="flex lg:flex-grow lg:self-end items-center mb-4 mt-4 md:mb-0 md:mt-12 md:mt-8 lg:mt-12 md:mt-24 text-xl sm:text-2xl lg:text-5xl md:text-3xl">
            <a  href="https://github.com/sam98963" rel="noreferrer" target="_blank"  className="flex group cursor-pointer">
              <div className="group-hover:text-fifth">
                <i className="devicon-github-original p-2 sm:p-4"></i>
              </div>
              <div className="group-hover:text-fifth">
                <h2 className="transition-colors duration-300 ease-in-out relative">Check out my GitHub here!<span className="absolute left-0 w-0 h-1 bg-fifth transition-width duration-300 ease-in-out group-hover:w-full"></span></h2>
              </div>
            </a>
          </div>
        </article>
      </section>
    </main>
  )
}
