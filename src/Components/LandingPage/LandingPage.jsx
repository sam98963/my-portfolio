import Header from "../Header/Header"
export default function LandingPage(){
  return(
    <main className="h-screen w-screen bg-gradient-to-tr from-primary via-forth to-tertiary text-secondary flex flex-col">
      <Header />
      <section className="flex-grow w-full flex items-end text-start sm:p-15 p-5 sm:p-10  md:pb-10 lg:pt-0">
        <article>
          <h3 className="sm:text-4xl md:text-3xl text-2xl w-4/5">Musician, Triathlete and <span className="underline underline-offset-6 text-tertiary">Developer.</span></h3>
          <h1 className="sm:text-7xl md:text-9xl text-4xl w-full">
            Samuel Williamson
          </h1>
        </article>
      </section>
    </main>
  )
}



// import Header from "../Header/Header"
// export default function LandingPage(){
//   return(
//     <main className="lg:h-screen h-auto w-screen bg-gradient-to-tr from-primary via-forth to-tertiary text-secondary flex flex-col">
//       <Header />
//       <section className="sm:flex-grow h-3/5 w-full flex sm:items-end items-center text-center sm:text-start sm:p-15 p-10 pt-44 sm:pt-56 lg:pt-0">
//         <h1 className="sm:text-8xl md:text-9xl text-6xl">
//           A Portfolio that matters.
//         </h1>
//       </section>
//     </main>
//   )
// }