import {ProofState, ProofStateChangedEvent} from '@aries-framework/core'
import {firstValueFrom, ReplaySubject, Observable} from 'rxjs'
import {catchError, filter, map, timeout} from 'rxjs/operators'

export function waitForProofExchangeRecordSubject(
  subject: ReplaySubject<ProofStateChangedEvent> | Observable<ProofStateChangedEvent>,
  {
    threadId,
    parentThreadId,
    state,
    previousState,
    timeoutMs = 10000,
  }: {
    threadId?: string
    parentThreadId?: string
    state?: ProofState
    previousState?: ProofState | null
    timeoutMs?: number
  }
) {
  const observable = subject instanceof ReplaySubject ? subject.asObservable() : subject
  return firstValueFrom(
    observable.pipe(
      filter((e) => previousState === undefined || e.payload.previousState === previousState),
      filter((e) => threadId === undefined || e.payload.proofRecord.threadId === threadId),
      filter((e) => parentThreadId === undefined || e.payload.proofRecord.parentThreadId === parentThreadId),
      filter((e) => state === undefined || e.payload.proofRecord.state === state),
      timeout(timeoutMs),
      catchError(() => {
        throw new Error(
          `ProofStateChangedEvent event not emitted within specified timeout: {
  previousState: ${previousState},
  threadId: ${threadId},
  parentThreadId: ${parentThreadId},
  state: ${state}
}`
        )
      }),
      map((e) => e.payload.proofRecord)
    )
  )
}
