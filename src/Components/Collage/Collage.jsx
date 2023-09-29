import MightyMiniMindsImg from "../../assets/MMM.png"
import PortfolioImg from "../../assets/Portfolio.png"
import ThreeImg from "../../assets/ThreeRedesign.png"
import Lyra from "../../assets/Lyra.png"
import ProjectsModal from "../../Components/ProjectsModal/ProjectsModal"
import { useState } from "react"
export default function Collage(){
  const [modalHidden, setModalHidden] = useState("hidden")

  function handleOnHover(){
    setModalHidden("block")
  }
  function handleOffHover(){
    setModalHidden("hidden")
  }
  return(
  <main  className="w-screen h-auto lg:h-screen flex items-center justify-center bg-gradient-to-br from-primary via-forth to-tertiary" >
      <section className="w-4/5 h-4/5 overflow-hidden rounded-2xl relative">
        <figure className="h-full w-full rotate-12 scale-150 cursor-pointer ">
       <ProjectsModal projectdetails = "" visibility = {modalHidden} handleOffHover = {handleOffHover}/>
         <div className="h-1/2 lg:w-full w-1/2 flex">
           <img src={Lyra} onMouseEnter = {handleOnHover} 
             className="flex-2 h-full w-full object-cover lg:p-2 sm:p-1.5 p-1 rounded-lg"/>
           <img src={PortfolioImg} 
           className="flex-1 h-full w-full object-cover lg:p-2 sm:p-1.5 p-1 rounded-lg"/>
         </div>
         <div className="h-1/2 lg:w-full w-1/2 flex">
         <img src={ThreeImg}
           className="flex-1 h-full w-full object-cover lg:p-2 sm:p-1.5 p-1"/>
           <img src={MightyMiniMindsImg}
           className="flex-2 h-full w-full object-cover lg:p-2 sm:p-1.5 p-1"/>
         </div>
       </figure>
      </section>
    </main>
  )
}


