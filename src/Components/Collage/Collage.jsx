import MightyMiniMindsImg from "../../assets/MMM.png"
import PortfolioImg from "../../assets/Portfolio.png"
import ThreeImg from "../../assets/ThreeRedesign.png"
import Lyra from "../../assets/Lyra.png"
import ProjectsModal from "../../Components/ProjectsModal/ProjectsModal"
import { useState } from "react"
export default function Collage(){
  const [modalHidden, setModalHidden] = useState("hidden")
  const [projectDetails, setProjectDetails] = useState({})
  function handleOnHover(projectKey){
    switch(projectKey) {
      case "Lyra":
        setProjectDetails({
          title: "Lyra Strings",
          siteLink: "Lyra Site",
          repoLink: "Lyra Repo"
        });
        break;
      case "Portfolio":
        setProjectDetails({
          title: "This Portfolio",
          repoLink: "Portfolio Repo"
        });
        break;
      case "Three":
        setProjectDetails({
          title: "Three Login Page Redesign",
          siteLink: "Three Redesign Site",
          repoLink: "Three Redesign Repo"
        });
        break;
      case "MMM":
        setProjectDetails({
          title: "Mighty Mini Minds",
          siteLink: "Mighty Mini Minds Site",
          repoLink: "Mighty Mini Minds Repo"
        });
        break;
    }
    setModalHidden("block")
    console.log(projectDetails)
  }
  function handleOffHover(){
    setModalHidden("hidden")
  }
  return(
  <main  className="w-screen h-auto lg:h-screen flex items-center justify-center bg-gradient-to-br from-primary via-forth to-tertiary" >
      <section className="w-4/5 h-4/5 overflow-hidden rounded-2xl relative">
        <figure className="h-full w-full rotate-12 scale-150">
       <ProjectsModal projectDetails = {projectDetails} visibility = {modalHidden} handleOffHover = {handleOffHover}/>
         <div className="h-1/2 lg:w-full w-1/2 flex">
           <img src={Lyra} onMouseEnter = {()=>handleOnHover("Lyra")}
             className="flex-2 h-full w-full object-cover lg:p-2 sm:p-1.5 p-1 rounded-lg"/>
           <img src={PortfolioImg} onMouseEnter = {()=>handleOnHover("Portfolio")}
           className="flex-1 h-full w-full object-cover lg:p-2 sm:p-1.5 p-1 rounded-lg"/>
         </div>
         <div className="h-1/2 lg:w-full w-1/2 flex">
         <img src={ThreeImg} onMouseEnter = {()=>handleOnHover("Three")}
           className="flex-1 h-full w-full object-cover lg:p-2 sm:p-1.5 p-1"/>
           <img src={MightyMiniMindsImg} onMouseEnter = {()=>handleOnHover("MMM")}
           className="flex-2 h-full w-full object-cover lg:p-2 sm:p-1.5 p-1"/>
         </div>
       </figure>
      </section>
    </main>
  )
}


