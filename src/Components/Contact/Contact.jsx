export default function Contact(){
  return(
    <main className="w-screen h-auto lg:h-screen flex md:items-center justify-center bg-gradient-to-br from-primary via-forth to-tertiary text-white">
      <section className="w-4/5 sm:h-4/5 h-3/5 flex flex-col sm:text-md text-sm">
        <h1 className="sm:text-8xl text-6xl">Contact Me</h1>
        <section className="h-4/5 w-full flex items-center">
          <article className="flex-1 px-5 flex flex-col items-start">
            <h2>Problem needs solving?</h2>
            <h3>Drop me a message and we can go the distance together!</h3>
            <figure>

            </figure>
          </article>
          <form className="flex-1 flex flex-col px-5 items-start">
            <label className="flex flex-col w-3/5">
              Name
              <input/>
            </label>
            <label className="flex flex-col w-3/5">
              Email
              <input/>
            </label>
            <label className="flex flex-col w-3/5">
              Message
              <input />
            </label>
            <button>Submit</button>
          </form>
        </section>
      </section>
    </main>
  )
}