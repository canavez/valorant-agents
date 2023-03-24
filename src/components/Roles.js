import "./Roles.css"

const Roles = ({fetchAgents, agents, filterRoleController}) => {

    const handleClickController = (role) => {
        filterRoleController(role)
    }

  return (
    <div className="menu-filter">
        <div className="div" onClick={() => handleClickController("Controller")}>
            controller
        </div>
        <div className="div" onClick={() => handleClickController("Initiator")}>
            initiator
        </div>
        <div className="div" onClick={() => handleClickController("Sentinel")}>
            sentinel
        </div>
        <div className="div" onClick={() => handleClickController("Duelist")}>
            duelist
        </div>
        <div className="div" onClick={() => handleClickController("ShowAll")}>
            show all
        </div>
    </div>
  )
}

export default Roles