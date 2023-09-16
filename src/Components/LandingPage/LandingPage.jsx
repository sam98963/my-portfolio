import Header from "../Header/Header"
export default function LandingPage(){
  return(
    <main className="h-screen w-screen bg-primary text-secondary flex flex-col">
      <Header />
      <section className="flex-grow w-full flex items-end">
      <h1 className="text-9xl">
        A Portfolio that matters.
      </h1>

      </section>
    </main>
  )
}