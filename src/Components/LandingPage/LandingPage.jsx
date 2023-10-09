import Header from "../Header/Header"
import LogoAnimation from "../LogoAnimation/LogoAnimation"
export default function LandingPage(){
  return(
    <main className="h-fit md:h-screen w-screen bg-gradient-to-tr from-primary via-forth to-tertiary text-secondary flex flex-col">
      <Header />
      <section className="w-full h-full flex flex-col text-start sm:p-15 p-5 sm:p-10 md:pt-10">
        <article>
          <h3 className="sm:text-4xl md:text-3xl text-2xl w-4/5">Musician, Triathlete and <span className="underline underline-offset-6 text-tertiary">Developer.</span></h3>
          <h1 className="sm:text-7xl md:text-9xl text-4xl w-full">
            Samuel Williamson
          </h1>
        </article>
        <article className="flex-col items-center flex-grow flex lg:flex-row-reverse">
          <LogoAnimation />
          <div className="flex lg:flex-grow lg:self-end items-center mb-4 md:mt-0 lg:mt-12 md:mt-24 text-xl sm:text-2xl md:text-4xl sm:text-3xl">
            <i className="devicon-github-original p-2 sm:p-4"></i>
            <h2 className="">Check out my GitHub here!</h2>
          </div>
        </article>
      </section>
    </main>
  )
}
