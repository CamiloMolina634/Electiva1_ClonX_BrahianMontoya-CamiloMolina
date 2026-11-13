import { doc, runTransaction } from 'firebase/firestore'
import { FirebaseAuth, FirebaseDB } from './config'

export const syncPublicProfile = async (uid: string): Promise<void> => {
  if (FirebaseAuth.currentUser?.uid !== uid) return
  await runTransaction(FirebaseDB, async (transaction) => {
    const profile = (await transaction.get(doc(FirebaseDB, 'users', uid))).data()
    if (typeof profile?.fullname !== 'string' || typeof profile.username !== 'string') return
    transaction.set(doc(FirebaseDB, 'publicProfiles', uid), {
      fullname: profile.fullname,
      username: profile.username,
    })
  })
}
