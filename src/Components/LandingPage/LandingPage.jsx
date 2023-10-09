import Header from "../Header/Header"
import LogoAnimation from "../LogoAnimation/LogoAnimation"
export default function LandingPage(){
  return(
    <main className="h-screen w-screen bg-gradient-to-tr from-primary via-forth to-tertiary text-secondary flex flex-col">
      <Header />
      <section className="w-full flex flex-col text-start sm:p-15 p-5 sm:p-10 md:pt-10">
        <article>
          <h3 className="sm:text-4xl md:text-3xl text-2xl w-4/5">Musician, Triathlete and <span className="underline underline-offset-6 text-tertiary">Developer.</span></h3>
          <h1 className="sm:text-7xl md:text-9xl text-4xl w-full">
            Samuel Williamson
          </h1>
        </article>
        <article className="flex-grow flex-row-reverse flex">
          <LogoAnimation />
          <div className="flex items-center self-end">
            <i className="devicon-github-original p-2"></i>
            <h2>Check out my GitHub here!</h2>
          </div>
        </article>
      </section>
    </main>
  )
}
