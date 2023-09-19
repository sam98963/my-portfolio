import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faEnvelope,
  faPhone
} from "@fortawesome/free-solid-svg-icons";
export default function Contact(){
  return(
    <main className="w-screen h-auto lg:h-screen flex md:items-center justify-center bg-gradient-to-br from-primary via-forth to-tertiary text-white pt-10 lg:pt-0">
      <section className="w-4/5 sm:h-4/5 h-3/5 flex flex-col sm:text-md text-sm">
        <h1 className="sm:text-8xl text-6xl">Contact Me</h1>
        <section className="h-4/5 w-full flex flex-col md:flex-row sm:items-center pt-10">
          <article className="flex-1 sm:px-5 flex flex-col sm:items-center text-start">
            <div>
            <h3 className=" text-2xl sm:text-4xl md:text-5xl">Lets build something unforgettable <span className="block text-4xl sm:text-6xl md:text-8xl border-b-4 border-white w-fit">together.</span></h3>
            </div>
            <figure className="sm:self-start mt-5 pt-2 sm:text-2xl text-xl md:text-3xl flex justify-between w-2/5">
              <i className="devicon-linkedin-plain"></i>
              <i className="devicon-twitter-original"></i>
              <FontAwesomeIcon icon={faEnvelope} />
              <FontAwesomeIcon icon={faPhone} />
            </figure>
          </article>
          <form className="flex-1 flex flex-col px-5 items-center sm:text-lg pt-10 md:pt-0">
            <label className="flex flex-col w-full md:w-4/5 py-2">
              Name
              <input type="text" className="text-black rounded-sm border border-forth bg-tertiary opacity-50 h-10 mt-1 focus:outline-none focus:border-fifth focus:shadow-input"/>
            </label>
            <label className="flex flex-col w-full md:w-4/5 py-2">
              Email
              <input type="text" className="text-black rounded-sm border border-forth bg-tertiary opacity-50 h-10 mt-1 focus:outline-none focus:border-fifth focus:shadow-input"/>
            </label>
            <label className="flex flex-col w-full md:w-4/5 py-2">
              Message
              <textarea type="text-area" className="text-black rounded-sm border border-forth bg-tertiary opacity-50 h-20 mt-1 focus:outline-none focus:border-fifth focus:shadow-input"/>
            </label>
            <button className="w-full md:w-4/5 bg-forth rounded-sm mt-2 py-3">Submit</button>
          </form>
        </section>
      </section>
    </main>
  )
}