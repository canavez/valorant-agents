import "./App.css"

import Cards from "./components/Cards";
import AgentDetails from "./components/AgentDetails";

import logo from "./images/logo.png"

import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Roles from "./components/Roles";

const url = 'https://valorant-api.com/v1/agents'

function App() {

  const [agents, setAgents] = useState([])

  const [displayAgents, setDisplayAgents] = useState([])

  const fetchAgents = async () => {
    const response = await axios.get(url)
    const data = await response.data.data

    setAgents(data.sort(function(a, b) {
      const agentA = a.displayName.toUpperCase()
      const agentB = b.displayName.toUpperCase()
      if (agentA < agentB) {
        return -1
      }
      if (agentA > agentB) {
        return 1
      }
      return 0
    }))
    setAgents((prev) => prev.filter((agent) => agent.uuid !== "ded3520f-4264-bfed-162d-b080e2abccf9"))
  }
  
  const filterRoleController = (role) => {
    if (role === "ShowAll") {
      setDisplayAgents(agents)
      return
    }
    const controllerAgents = agents.filter(agent => agent.role.displayName === role)
    setDisplayAgents(controllerAgents)
  }

  useEffect(() => {
    fetchAgents()
  }, [])

  useEffect(() => {
    setDisplayAgents(agents)
  }, [agents])

  return (
    <Router>
      <div className="App">
        <div className="main-container">
          <Route path="/" exact render={() => (
            <>
              <img src={logo} alt="logo" className="logo-app"/>
              <Roles
                fetchAgents={fetchAgents}
                agents={agents}
                filterRoleController={filterRoleController}
              />
              <Cards
                key={agents.uuid}
                displayAgents={displayAgents}
                agents={agents}
              />
            </>
          )}/>
          <Route path="/:agentName" exact render={() =>
            <AgentDetails
              key={agents.uuid}
              agents={agents}
            />
          }/>
        </div>
      </div>
    </Router>
  );
}

export default App;
