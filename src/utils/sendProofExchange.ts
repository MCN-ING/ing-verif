import {Agent, ConnectionRecord, ProofAttributeInfo, ProofPredicateInfo} from '@aries-framework/core'
import {uuid} from '@aries-framework/core/build/utils/uuid'

export const sendProofExchange = async (
  agent: Agent,
  connection: ConnectionRecord,
  proofName: string,
  attributes?: Record<string, ProofAttributeInfo>,
  predicates?: Record<string, ProofPredicateInfo>
) => {
  const parentThreadId = uuid()
  const proofExchangeRecord = await agent!.proofs.requestProof({
    connectionId: connection.id,
    parentThreadId,
    protocolVersion: 'v1',
    proofFormats: {
      indy: {
        name: proofName,
        version: '1.0',
        nonce: '1298236324864',
        requestedAttributes: attributes,
        requestedPredicates: predicates,
      },
    },
  })
  return {proofId: proofExchangeRecord.id}
}
