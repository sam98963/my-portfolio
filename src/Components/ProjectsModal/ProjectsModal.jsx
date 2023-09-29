import PropTypes from "prop-types"
export default function ProjectsModal({visibility, handleOffHover, projectDetails}){
    let modalClass = `fixed inset-0 flex items-center justify-center bg-red-500 w-full h-full z-20 ${visibility}`
  return(
    <section onMouseLeave={handleOffHover} className={modalClass}>
      {projectDetails.title? <p>{projectDetails.title}</p> : null}
      {projectDetails.repoLink? <p>{projectDetails.repoLink}</p> : null}
      {projectDetails.siteLink? <p>{projectDetails.siteLink}</p> : null}
    </section>
  )
}

ProjectsModal.propTypes = {
  visibility: PropTypes.string.isRequired,
  handleOffHover: PropTypes.func.isRequired,
  projectDetails: PropTypes.object.isRequired
}