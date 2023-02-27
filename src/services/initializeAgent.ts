import {
  Agent,
  AutoAcceptCredential,
  MediatorPickupStrategy,
  WsOutboundTransport,
  HttpOutboundTransport,
  ConsoleLogger,
  LogLevel,
} from '@aries-framework/core'
import {agentDependencies} from '@aries-framework/react-native'
import Config from 'react-native-config'

import ledgers from '../configs/ledgers/indy'

const InitializeAgent = async () => {
  const indyLedgers = ledgers.filter((item) => !item.id.startsWith('Indicio'))
  agentDependencies.indy.setDefaultLogger('trace')
  try {
    const newAgent = new Agent({
      config: {
        label: 'Verification App',
        mediatorConnectionsInvite: Config.MEDIATOR_URL,
        mediatorPickupStrategy: MediatorPickupStrategy.Implicit,
        walletConfig: {id: '001', key: 'credentials.key'},
        autoAcceptConnections: true,
        autoAcceptCredentials: AutoAcceptCredential.ContentApproved,
        indyLedgers,
        connectToIndyLedgersOnStartup: true,
        autoUpdateStorageOnStartup: true,
        logger: new ConsoleLogger(LogLevel.info),
      },
      dependencies: agentDependencies,
    })

    const wsTransport = new WsOutboundTransport()
    const httpTransport = new HttpOutboundTransport()

    newAgent.registerOutboundTransport(wsTransport)
    newAgent.registerOutboundTransport(httpTransport)

    await newAgent.initialize()
    return newAgent
  } catch (error) {
    return undefined
  }
}

export default InitializeAgent
