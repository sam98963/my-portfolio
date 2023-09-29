import PropTypes from "prop-types"
export default function ProjectsModal({visibility, handleOffHover, projectDetails}){
    let modalClass = `fixed inset-0 flex items-center justify-center bg-red-500 bg-opacity-90 w-full h-full z-20 ${visibility}`
    let articleClass = `bg-red-500 bg-opacity-90 p-6 rounded-lg shadow-lg ${visibility === "block" ? "opacity-100" : "opacity-0"}`;
  return(
    <section onMouseLeave={handleOffHover} className={modalClass}>
      <article className={articleClass}>
        {projectDetails.title? <p>{projectDetails.title}</p> : null}
        {projectDetails.repoLink? <p>{projectDetails.repoLink}</p> : null}
        {projectDetails.siteLink? <p>{projectDetails.siteLink}</p> : null}
      </article>
    </section>
  )
}

ProjectsModal.propTypes = {
  visibility: PropTypes.string.isRequired,
  handleOffHover: PropTypes.func.isRequired,
  projectDetails: PropTypes.object.isRequired
}