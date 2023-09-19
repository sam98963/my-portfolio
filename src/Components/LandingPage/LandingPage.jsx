import Header from "../Header/Header"
export default function LandingPage(){
  return(
    <main className="lg:h-screen h-auto w-screen bg-gradient-to-tr from-primary via-forth to-tertiary text-secondary flex flex-col">
      <Header />
      <section className="sm:flex-grow h-3/5 w-full flex sm:items-end items-center sm:p-15 p-10 pt-44 sm:pt-56 lg:pt-0">
        <h1 className="sm:text-8xl md:text-9xl text-6xl">
          A Portfolio that matters.
        </h1>
      </section>
    </main>
  )
}