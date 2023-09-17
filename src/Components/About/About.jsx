export default function About(){
  return(
    <main className="w-screen h-auto lg:h-screen flex items-center justify-center bg-gradient-to-tr from-primary via-forth to-tertiary text-white">
      <section className="w-4/5 h-4/5 flex flex-col">
        <h1 className="text-8xl">About Me</h1>
        <article className="w-4/5 h-full pt-12 flex">
          <p className="pr-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet lacus posuere arcu vulputate accumsan. Vestibulum congue tellus sed est bibendum, id ullamcorper nunc bibendum. Nunc egestas dapibus pharetra. Integer.</p>
          <p className="px-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet lacus posuere arcu vulputate accumsan. Vestibulum congue tellus sed est bibendum, id ullamcorper nunc bibendum. Nunc egestas dapibus pharetra. Integer.</p>
        </article>

      </section>
    </main>
  )
}