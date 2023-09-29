import PropTypes from "prop-types"
export default function ProjectsModal({visibility, handleOffHover}){
    let modalClass = `fixed inset-0 flex items-center justify-center bg-red-500 w-full h-full z-20 ${visibility}`
  return(
    <section onMouseLeave={handleOffHover} className={modalClass}>
      <h1>Mighty Mini Minds</h1>
      <p>Link to repo</p>
      <p>Link to site</p>
    </section>
  )
}

ProjectsModal.propTypes = {
  visibility: PropTypes.string.isRequired,
  handleOffHover: PropTypes.func.isRequired
}