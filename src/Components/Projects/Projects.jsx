import lyra from "../../assets/Lyra.png"
import mmm from "../../assets/MMM.png"
import portfolio from "../../assets/Portfolio.png"
import three from "../../assets/ThreeRedesign.png"


export default function Projects(){
  return (
    <main id="projects" className="w-screen h-fit flex items-center justify-center bg-gradient-to-br from-primary via-forth to-tertiary">
      <section className="w-full h-7/8 flex flex-col items-center justify-around lg:flex-row lg:flex-wrap lg:justify-around lg:items-center">
        
        <figure className="lg:w-144 md:w-120 sm:w-88 w-5/6 h-48 sm:h-56 lg:h-120  my-2 flex flex-col items-center justify-between">
          <img src={lyra} className="h-7/8"/>
          <div className="w-4/5 h-fill flex justify-around p-2 lg:p-0">
            <button className="btn w-2/5 bg-white rounded-sm rounded-xl relative flex items-center justify-center"><span>Site</span></button>
            <button className="btn w-2/5 bg-white rounded-sm rounded-xl relative flex items-center justify-center"><span>Repo</span></button>
          </div>
        </figure>

        <figure className="lg:w-144 md:w-120 sm:w-88 w-5/6 h-48 sm:h-56 lg:h-120  my-2 flex flex-col items-center justify-between">
          <img src={three} className="h-7/8"/>
          <div className="w-4/5 h-fill flex justify-around p-2 lg:p-0">
            <button className="btn w-2/5 bg-white rounded-sm rounded-xl relative flex items-center justify-center"><span>Site</span></button>
            <button className="btn w-2/5 bg-white rounded-sm rounded-xl relative flex items-center justify-center"><span>Repo</span></button>
          </div>
        </figure>

        <figure className="lg:w-144 md:w-120 sm:w-88 w-5/6 h-48 sm:h-56 lg:h-120  my-2 flex flex-col items-center justify-between">
          <img src={portfolio} className="h-7/8"/>
          <div className="w-4/5 h-fill flex justify-around p-2 lg:p-0">
            <button className="btn w-2/5 bg-white rounded-sm rounded-xl relative flex items-center justify-center"><span>Site</span></button>
            <button className="btn w-2/5 bg-white rounded-sm rounded-xl relative flex items-center justify-center"><span>Repo</span></button>
          </div>
        </figure>

        <figure className="lg:w-144 md:w-120 sm:w-88 w-5/6 h-48 sm:h-56 lg:h-120  my-2 flex flex-col items-center justify-between">
          <img src={mmm} className="h-7/8"/>
          <div className="w-4/5 h-fill flex justify-around p-2 lg:p-0">
            <button className="btn w-2/5 bg-white rounded-sm rounded-xl relative flex items-center justify-center"><span>Site</span></button>
            <button className="btn w-2/5 bg-white rounded-sm rounded-xl relative flex items-center justify-center"><span>Repo</span></button>
          </div>
        </figure>
      </section>
    </main>
  )
}