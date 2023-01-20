import type {InitConfig} from '@aries-framework/core'

import {Agent, WsOutboundTransport, HttpOutboundTransport, ConsoleLogger, LogLevel} from '@aries-framework/core'
import {agentDependencies} from '@aries-framework/react-native'
import {Config} from 'react-native-config'

const config: InitConfig = {
  label: 'QC Validator',
  logger: new ConsoleLogger(LogLevel.trace),
  walletConfig: {
    id: 'mediator',
    key: 'testkey0000000000000000000000000',
  },
  autoAcceptConnections: true,
  autoAcceptMediationRequests: true,
  mediatorConnectionsInvite: Config.MEDIATOR_URL,
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
