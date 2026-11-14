import type { Like } from '../types/Like'

export const getLikeCounts = (likes: Like[]) => {
  const counts = new Map<string, number>()
  for (const like of likes) counts.set(like.tweetId, (counts.get(like.tweetId) ?? 0) + 1)
  return counts
}

export const compareFeaturedTweets = (
  first: { id: string; createdAt: string },
  second: { id: string; createdAt: string },
  counts: Map<string, number>,
) => (counts.get(second.id) ?? 0) - (counts.get(first.id) ?? 0)
  || second.createdAt.localeCompare(first.createdAt)
  || first.id.localeCompare(second.id)
