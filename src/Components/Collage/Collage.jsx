import MightyMiniMindsImg from "../../assets/MMM.png"
import PortfolioImg from "../../assets/Portfolio.png"
import ThreeImg from "../../assets/ThreeRedesign.png"
import Lyra from "../../assets/Lyra.png"
import ProjectsModal from "../../Components/ProjectsModal/ProjectsModal"
import { useState } from "react"
export default function Collage(){
  const [modalHidden, setModalHidden] = useState("hidden")
  const [projectDetails, setProjectDetails] = useState({})
  function handleOnClick(projectKey){
    switch(projectKey) {
      case "Lyra":
        setProjectDetails({
          title: "Lyra Strings",
          siteLink: "Lyra Site",
          siteUrl: "",
          repoLink: "Lyra Repo",
          repoUrl: ""
        });
        break;
      case "Portfolio":
        setProjectDetails({
          title: "This Portfolio",
          repoLink: "Portfolio Repo",
          repoUrl: "https://github.com/sam98963/my-portfolio"
        });
        break;
      case "Three":
        setProjectDetails({
          title: "Three Login Page Redesign",
          siteLink: "Three Redesign Site",
          siteUrl: "https://three-login-redesign.netlify.app/",
          repoLink: "Three Redesign Repo",
          repoUrl: "https://github.com/sam98963/Three_Login_Redesign"
        });
        break;
      case "MMM":
        setProjectDetails({
          title: "Mighty Mini Minds",
          siteLink: "Mighty Mini Minds Site",
          siteUrl: "https://migthyminiminds.netlify.app/",
          repoLink: "Mighty Mini Minds Repo",
          repoUrl: "https://github.com/sam98963/mighty_mini_minds"

        });
        break;
    }
    setModalHidden("block")
    console.log(projectDetails)
  }
  return(
  <main id="projects" className="w-screen h-auto lg:h-screen flex items-center justify-center bg-gradient-to-br from-primary via-forth to-tertiary" >
      <section className="w-4/5 h-4/5 overflow-hidden rounded-2xl relative">
        <figure className="h-full w-full rotate-12 scale-150">
       <ProjectsModal projectDetails = {projectDetails} visibility = {modalHidden} setModalHidden = {setModalHidden}/>
         <div className="h-1/2 lg:w-full w-1/2 flex">
           <img src={Lyra} onClick = {()=>handleOnClick("Lyra")}
           className="flex-2 h-full w-full object-cover lg:p-2 sm:p-1.5 p-1 hover:drop-shadow-input"/>
           <img src={PortfolioImg} onClick = {()=>handleOnClick("Portfolio")}
           className="flex-1 h-full w-full object-cover lg:p-2 sm:p-1.5 p-1 hover:drop-shadow-input"/>
         </div>
         <div className="h-1/2 lg:w-full w-1/2 flex">
         <img src={ThreeImg} onClick = {()=>handleOnClick("Three")}
           className="flex-1 h-full w-full object-cover lg:p-2 sm:p-1.5 p-1 hover:drop-shadow-input"/>
           <img src={MightyMiniMindsImg} onClick = {()=>handleOnClick("MMM")}
           className="flex-2 h-full w-full object-cover lg:p-2 sm:p-1.5 p-1 hover:drop-shadow-input"/>
         </div>
       </figure>
      </section>
    </main>
  )
}


