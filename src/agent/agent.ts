import type {InitConfig} from '@aries-framework/core'

import {Agent, WsOutboundTransport, HttpOutboundTransport, ConsoleLogger, LogLevel} from '@aries-framework/core'
import {agentDependencies} from '@aries-framework/react-native'

const config: InitConfig = {
  label: 'QC Validator',
  logger: new ConsoleLogger(LogLevel.trace),
  walletConfig: {
    id: 'mediator',
    key: 'testkey0000000000000000000000000',
  },
  autoAcceptConnections: true,
  autoAcceptMediationRequests: true,
  mediatorConnectionsInvite:
    'https://aries-mediator.apps.exp.openshift.cqen.ca?c_i=eyJAdHlwZSI6ICJkaWQ6c292OkJ6Q2JzTlloTXJqSGlxWkRUVUFTSGc7c3BlYy9jb25uZWN0aW9ucy8xLjAvaW52aXRhdGlvbiIsICJAaWQiOiAiOWM4NWYyZjAtOGM1ZS00NzEzLTk5ZGMtYjEwMGMxZWE1NGU1IiwgInJlY2lwaWVudEtleXMiOiBbIjNkSHByUzlCTGI1SkUxYnVUSFJLTUphd1RiY052dTZaNk43a3RpQ1k0djZRIl0sICJsYWJlbCI6ICJhY2EtcHktbWVkaWF0b3IiLCAic2VydmljZUVuZHBvaW50IjogImh0dHBzOi8vYXJpZXMtbWVkaWF0b3IuYXBwcy5leHAub3BlbnNoaWZ0LmNxZW4uY2EifQ==',
}
const agent = new Agent({
  config,
  dependencies: agentDependencies,
})

// Register a simple `WebSocket` outbound transport
agent.registerOutboundTransport(new WsOutboundTransport())
// Register a simple `Http` outbound transport
agent.registerOutboundTransport(new HttpOutboundTransport())

export {agent}
