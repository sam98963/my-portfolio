import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faArrowUpRightFromSquare
} from "@fortawesome/free-solid-svg-icons";
export default function ProjectsModal({visibility, handleOffHover, projectDetails}){
    let modalClass = `fixed inset-0 flex items-center justify-center bg-forth transition-fadeIn bg-opacity-90 w-full h-full z-20 ${visibility}`
  return(
    <section onMouseLeave={handleOffHover} className={modalClass}>
      <article className="-rotate-24 flex flex-col">
        {projectDetails.title? <p className="text-7xl border-b-4 border-black">{projectDetails.title}</p> : null}
        <div className="flex flex-row w-4/5 self-end justify-end items-center">
         
         {projectDetails.repoLink? <p className="ml-4 underline cursor-pointer">
          <a>{projectDetails.repoLink}<FontAwesomeIcon className="text-sm underline ml-1" icon={faArrowUpRightFromSquare} /></a>
          </p> : null}
          
          {projectDetails.siteLink? <p className="ml-4 underline cursor-pointer">
          <a>{projectDetails.siteLink}<FontAwesomeIcon className="text-sm underline ml-1" icon={faArrowUpRightFromSquare} /></a>
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