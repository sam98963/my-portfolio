import lyra from "../../assets/Lyra.png"
import mmm from "../../assets/MMM.png"
import portfolio from "../../assets/Portfolio2.png"
import three from "../../assets/ThreeRedesign.png"
import "./Projects.css"


export default function Projects(){
  return (
    <main id="projects" className="w-screen h-fit flex items-center justify-center bg-gradient-to-br from-primary via-forth to-tertiary">
      <section className="w-full h-7/8 flex flex-col items-center justify-around lg:flex-row lg:flex-wrap lg:justify-around lg:items-center p-5">
        
       

        <figure className="lg:w-144 md:w-120 sm:w-88 w-5/6 h-48 sm:h-56 lg:h-120  my-2 flex flex-col items-center justify-between">
          <img src={three} className="h-7/8"/>
          <div className="w-4/5 h-fill flex justify-around p-2 lg:p-0">
            <a href="https://three-login-redesign.netlify.app/" rel="noreferrer" target="_blank" className="three smlbtn w-2/5 bg-white rounded-sm rounded-xl relative flex items-center justify-center cursor-pointer text-sm sm:text-base"><span>Site</span></a>
            <a href="https://github.com/sam98963/Three_Login_Redesign" rel="noreferrer" target="_blank" className="three smlbtn w-2/5 bg-white rounded-sm rounded-xl relative flex items-center justify-center cursor-pointer text-sm sm:text-base"><span>Repo</span></a>
          </div>
        </figure>

        <figure className="lg:w-144 md:w-120 sm:w-88 w-5/6 h-48 sm:h-56 lg:h-120  my-2 flex flex-col items-center justify-between">
          <img src={portfolio} className="h-7/8"/>
          <div className="w-4/5 h-fill flex justify-around p-2 lg:p-0">
            <a href="#" className="portfolio smlbtn w-2/5 bg-white rounded-sm rounded-xl relative flex items-center justify-center cursor-pointer text-sm sm:text-base"><span>Site</span></a>
            <a href="https://github.com/sam98963/my-portfolio" rel="noreferrer" target="_blank" className="portfolio smlbtn w-2/5 bg-white rounded-sm rounded-xl relative flex items-center justify-center cursor-pointer text-sm sm:text-base"><span>Repo</span></a>
          </div>
        </figure>

        <figure className="lg:w-144 md:w-120 sm:w-88 w-5/6 h-48 sm:h-56 lg:h-120  my-2 flex flex-col items-center justify-between">
          <img src={mmm} className="h-7/8"/>
          <div className="w-4/5 h-fill flex justify-around p-2 lg:p-0">
            <a href="https://mightyminiminds.netlify.app/" rel="noreferrer" target="_blank" className="mmm smlbtn w-2/5 bg-white rounded-sm rounded-xl relative flex items-center justify-center cursor-pointer text-sm sm:text-base"><span>Site</span></a>
            <a href="https://github.com/sam98963/mighty_mini_minds" rel="noreferrer" target="_blank" className="mmm smlbtn w-2/5 bg-white rounded-sm rounded-xl relative flex items-center justify-center cursor-pointer text-sm sm:text-base"><span>Repo</span></a>
          </div>
        </figure>

        <figure className="lg:w-144 md:w-120 sm:w-88 w-5/6 h-48 sm:h-56 lg:h-120  my-2 flex flex-col items-center justify-between">
            <img src={lyra} className="h-7/8"/>
          <div className="w-4/5 h-fill flex justify-around p-2 lg:p-0">
            <a className="lyra smlbtn w-2/5 bg-white rounded-sm rounded-xl relative flex items-center justify-center cursor-pointer text-sm sm:text-base"><span>In Progress</span></a>
            <a className="lyra smlbtn w-2/5 bg-white rounded-sm rounded-xl relative flex items-center justify-center cursor-pointer text-sm sm:text-base"><span>In Progress</span></a>
          </div>
        </figure>
      </section>
    </main>
  )
}