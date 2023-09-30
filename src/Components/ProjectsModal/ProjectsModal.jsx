import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faArrowUpRightFromSquare
} from "@fortawesome/free-solid-svg-icons";
export default function ProjectsModal({visibility, handleOffHover, projectDetails}){
    let modalClass = `fixed inset-0 flex items-center justify-center bg-forth transition-fadeIn bg-opacity-90 w-full h-full z-20 ${visibility}`
  return(
    <section onMouseLeave={handleOffHover} className={modalClass}>
      <article className="-rotate-24 flex flex-col text-end">
        {projectDetails.title? <p className="lg:text-7xl md:text-5xl sm:text-3xl text-2xl md:border-b-4 border-b-2 border-black">{projectDetails.title}</p> : null}
        <div className="flex md:flex-row flex-col items-end justify-center w-full md:w-4/5 self-end md:justify-end md:items-center text-xs sm:text-sm md:text-md flex-wrap">
         
         {projectDetails.repoLink? <p className="ml-4 underline cursor-pointer flex flex-row">
          <a href={projectDetails.repoUrl} rel="noreferrer" target="_blank">{projectDetails.repoLink}<FontAwesomeIcon className="text-2xs sm:text-xs md:text-sm underline ml-1" icon={faArrowUpRightFromSquare} /></a>
          </p> : null}
          
          {projectDetails.siteLink? <p className="ml-4 underline cursor-pointer flex flex-row">
          <a href={projectDetails.siteUrl} rel="noreferrer" target="_blank">{projectDetails.siteLink}<FontAwesomeIcon className="text-2xs sm:text-xs md:text-sm underline ml-1" icon={faArrowUpRightFromSquare} /></a>
          </p> : null}
        </div>
      </article>
    </section>
  )
}

ProjectsModal.propTypes = {
  visibility: PropTypes.string.isRequired,
  handleOffHover: PropTypes.func.isRequired,
  projectDetails: PropTypes.object.isRequired
}