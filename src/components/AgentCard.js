import './AgentCard.css'

import { useHistory } from 'react-router-dom'

const AgentCard = ({name, icon, developerName, backgroundColor1, backgroundColor2, backgroundColor3, backgroundColor4, backgroundImage}) => {
  const history = useHistory()
  const handleAgentClick = () => {
    history.push(`/${developerName}`)
  }

const cardContainer = {
  opacity: "1",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "80%",
  heigth: "80%",
  padding: "0.8em 0.5em",
  margin: "1em auto",
  position: "relative",
  borderRadius: "0.5em"
}

const cardBg = {
  zIndex: "0",
  width: "100%",
  height: "100%",
  background: `linear-gradient(45deg, #${backgroundColor1} 0%, #${backgroundColor2} 33%, #${backgroundColor3} 67%, #${backgroundColor4} 100%)`,
  position: "absolute",
  display: "flex",
  borderRadius: "0.5em"
}

const cardImage = {
  zIndex: "1",
  background: `url(${backgroundImage})`,
  backgroundPosition: "center",
  position: "absolute",
  opacity: "0.2",
  width: "100%",
  height: "100%",
  borderRadius: "0.5em"
}

const cardItems = {
  zIndex: "3",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  fontWeight: "700",
  textTransform: "uppercase",
  fontSize: "1.5em",
  borderRadius: "0.5em"
}

  return (
    <div className="agent-card-container" style={cardContainer} onClick={handleAgentClick}>
      <div className="agent-card-bg" style={cardBg}></div>
      <div className="agent-card-image" style={cardImage}></div>
      <div className="agent-card-hover"></div>
      <div className="agent-card-items" style={cardItems}>
        <img src={icon} className='agent-icon'/>
        {name}
      </div>
    </div>
  )
}

export default AgentCard