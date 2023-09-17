export default function About(){
  return(
    <main className="w-screen h-auto lg:h-screen flex items-center justify-center bg-gradient-to-tr from-primary via-forth to-tertiary text-white">
      <section className="w-4/5 sm:h-4/5 h-3/5 flex flex-col sm:text-md text-sm">
        <h1 className="text-8xl">About Me</h1>
        <article className="w-full sm:w-4/5 h-fit pt-6 sm:pt-16 flex flex-col sm:text-start text-center">
        <h3 className="sm:text-3xl text-2xl">My Skills</h3>
          <section className="flex sm:flex-row flex-col">
            <p className="sm:pr-5 sm:pt-4 pt-2 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet lacus posuere arcu vulputate accumsan. Vestibulum congue tellus sed est bibendum, id ullamcorper nunc bibendum. Nunc egestas dapibus pharetra. Integer.</p>
            <p className="sm:px-5 sm:py-4 py-2 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet lacus posuere arcu vulputate accumsan. Vestibulum congue tellus sed est bibendum, id ullamcorper nunc bibendum. Nunc egestas dapibus pharetra. Integer.</p>
          </section>
        </article>

        <article className="w-full sm:w-4/5 h-fit pt-6 sm:pt-16 flex flex-col self-end sm:text-end text-center">
        <h3 className="sm:text-3xl text-2xl">My Passions</h3>
          <section className="flex sm:flex-row flex-col">
            <p className="sm:px-5 sm:pt-4 pt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet lacus posuere arcu vulputate accumsan. Vestibulum congue tellus sed est bibendum, id ullamcorper nunc bibendum. Nunc egestas dapibus pharetra. Integer.</p>
            <p className="sm:pl-5 sm:py-4 py-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet lacus posuere arcu vulputate accumsan. Vestibulum congue tellus sed est bibendum, id ullamcorper nunc bibendum. Nunc egestas dapibus pharetra. Integer.</p>
          </section>
        </article>

        <article className="w-full sm:w-4/5 h-fit pt-6 sm:pt-16 flex flex-col sm:text-start text-center">
        <h3 className="sm:text-3xl text-2xl">My Stack</h3>
          <section className="flex sm:flex-row flex-col">
            <p className="sm:pr-5 sm:pt-4 pt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet lacus posuere arcu vulputate accumsan. Vestibulum congue tellus sed est bibendum, id ullamcorper nunc bibendum. Nunc egestas dapibus pharetra. Integer.</p>
            <p className="sm:px-5 sm:py-4 py-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet lacus posuere arcu vulputate accumsan. Vestibulum congue tellus sed est bibendum, id ullamcorper nunc bibendum. Nunc egestas dapibus pharetra. Integer.</p>
          </section>
        </article>

      </section>
    </main>
  )
}