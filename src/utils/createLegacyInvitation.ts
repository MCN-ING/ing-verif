import {Agent} from '@aries-framework/core'

const makeConnectionConfig = {
  goal: 'To make a connection',
  goalCode: 'p2p-messaging',
  label: 'Verification app',
  alias: `Verification app`,
}

export const createLegacyInvitation = async (agent: Agent) => {
  const invitation = await agent.oob.createLegacyInvitation(makeConnectionConfig)
  const invitationId = invitation.outOfBandRecord.id
  const invitationUrl = invitation?.invitation.toUrl({domain: 'https://example.org'})
  if (invitationUrl) {
    return {invitationUrl: invitationUrl, invitationId: invitationId}
  }
  return undefined
}
