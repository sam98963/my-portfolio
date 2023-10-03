import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faArrowUpRightFromSquare
} from "@fortawesome/free-solid-svg-icons";
export default function ProjectsModal({visibility, projectDetails, setModalHidden}){
    function handleModalClose(){
      setModalHidden("hidden")
    }
    let modalClass = `fixed inset-0 flex items-center justify-center bg-forth transition-fadeIn bg-opacity-90 w-full h-full z-20 ${visibility}`
  return(
    <section className={modalClass}>
      <article className=" flex flex-col text-end relative">
        {projectDetails.title? <p className="lg:text-6xl md:text-4xl sm:text-2xl text-xl md:border-b-4 border-b-2 border-black overflow-wrap md:py-1">{projectDetails.title}</p> : null}
        <div className="flex md:flex-row flex-col items-end justify-center w-full md:w-4/5 self-end md:justify-end md:items-center text-xs sm:text-sm md:text-lg flex-wrap md:py-1">
         
         {projectDetails.repoLink? <p className="ml-4 cursor-pointer flex flex-row">
          <a href={projectDetails.repoUrl} rel="noreferrer" target="_blank">{projectDetails.repoLink}<FontAwesomeIcon className="text-2xs sm:text-xs md:text-sm ml-1" icon={faArrowUpRightFromSquare} /></a>
          </p> : null}
          
          {projectDetails.siteLink? <p className="ml-4 cursor-pointer flex flex-row">
          <a href={projectDetails.siteUrl} rel="noreferrer" target="_blank">{projectDetails.siteLink}<FontAwesomeIcon className="text-2xs sm:text-xs md:text-sm ml-1" icon={faArrowUpRightFromSquare} /></a>
          </p> : null}
        </div>
          <p className="text-4xs sm:text-3xs underline cursor-pointer hover:text-white" onClick={handleModalClose}>Back to other projects</p>
      </article>
    </section>
  )
}

ProjectsModal.propTypes = {
  visibility: PropTypes.string.isRequired,
  projectDetails: PropTypes.object.isRequired,
  setModalHidden: PropTypes.func.isRequired
}