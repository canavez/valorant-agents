import "./AgentDetails.css"

import { useParams, useHistory } from "react-router-dom"

const AgentDetails = ({key, agents}) => {
    const params = useParams()

    const history = useHistory()
    const handleClose = () => {
      history.push(`/`)
    }

    const stylizeBackgroundColor = (filteredAgent) => {
        return {background: `linear-gradient(45deg, #${filteredAgent.backgroundGradientColors[0]} 0%, #${filteredAgent.backgroundGradientColors[1]} 33%, #${filteredAgent.backgroundGradientColors[2]} 67%, #${filteredAgent.backgroundGradientColors[3]} 100%)`}
    }

    const filteredAgents = agents.filter(agent => agent.developerName === params.agentName)

    if (filteredAgents.length === 0) {
        return (
            <h1>Agente não encontrado!</h1>
        )
    } else {
        return filteredAgents.map(filteredAgent =>
            <div key={filteredAgent.uuid}>
                <div className="agentContainer">
                    <div className="backgroundColor" style={stylizeBackgroundColor(filteredAgent)}/>
                    <div className="backgroundImage" 
                        style={{
                            zIndex: "1",
                            background: `url(${filteredAgent.background})`,
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            position: "absolute",
                            opacity: "0.05",
                            width: "100%",
                            height: "100%",
                            boxSizing: "border-box"
                        }}/>
                    <div className="closeBtn" onClick={handleClose}>X</div>
                    <div className="bustAgent">
                        <img src={filteredAgent.bustPortrait} alt="bustAgent" />
                    </div>
                    <div className="detailsContainer">
                        <div className="textContainer">
                            <h1>{filteredAgent.displayName}</h1>
                            <p>{filteredAgent.description}</p>
                        </div>
                        <div className="abilitiesContainer">
                            <div className="abilityContainer">
                                <img src={filteredAgent.abilities[0].displayIcon} alt="" />
                                <h3>{filteredAgent.abilities[0].displayName}</h3>
                            </div>
                            <div className="abilityContainer">
                                <img src={filteredAgent.abilities[1].displayIcon} alt="" />
                                <h3>{filteredAgent.abilities[1].displayName}</h3>
                            </div>
                            <div className="abilityContainer">
                                <img src={filteredAgent.abilities[2].displayIcon} alt="" />
                                <h3>{filteredAgent.abilities[2].displayName}</h3>
                            </div>
                            <div className="abilityContainer">
                                <img src={filteredAgent.abilities[3].displayIcon} alt="" />
                                <h3>{filteredAgent.abilities[3].displayName}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AgentDetails