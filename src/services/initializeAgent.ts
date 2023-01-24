import {
  Agent,
  AutoAcceptCredential,
  ConsoleLogger,
  LogLevel,
  MediatorPickupStrategy,
  WsOutboundTransport,
  HttpOutboundTransport,
} from '@aries-framework/core'
import {agentDependencies} from '@aries-framework/react-native'
import Config from 'react-native-config'

import ledgers from '../configs/ledgers/indy'

const InitializeAgent = async () => {
  try {
    const newAgent = new Agent({
      config: {
        label: 'QC Wallet',
        mediatorConnectionsInvite: Config.MEDIATOR_URL,
        mediatorPickupStrategy: MediatorPickupStrategy.Implicit,
        walletConfig: {id: 'id001', key: 'key001'},
        autoAcceptConnections: true,
        autoAcceptCredentials: AutoAcceptCredential.ContentApproved,
        logger: new ConsoleLogger(LogLevel.trace),
        indyLedgers: ledgers,
        connectToIndyLedgersOnStartup: false,
        autoUpdateStorageOnStartup: true,
      },
      dependencies: agentDependencies,
    })

    const wsTransport = new WsOutboundTransport()
    const httpTransport = new HttpOutboundTransport()

    newAgent.registerOutboundTransport(wsTransport)
    newAgent.registerOutboundTransport(httpTransport)

    await newAgent.initialize()
    await newAgent.ledger.connectToPools()
    return newAgent
  } catch (error) {
    return undefined
  }
}

export default InitializeAgent
