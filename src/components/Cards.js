import './Cards.css'

import AgentCard from './AgentCard'

const Cards = ({displayAgents, agents}) => {
  return (
    <div className="main-container">
        <div className='cards-container'>
            {displayAgents.map((agent) => (
                <AgentCard 
                    key={agent.uuid}
                    name={agent.displayName}
                    icon={agent.displayIcon}
                    developerName={agent.developerName}
                    backgroundColor1={agent.backgroundGradientColors[0]}
                    backgroundColor2={agent.backgroundGradientColors[1]}
                    backgroundColor3={agent.backgroundGradientColors[2]}
                    backgroundColor4={agent.backgroundGradientColors[3]}
                    backgroundImage={agent.background}
                />
            ))}
        </div>
    </div>
  )
}

export default Cards