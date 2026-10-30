import type { Follow } from '../types/Follow'
import type { Tweet } from '../types/social'

export const getFeedTweets = (
  tweets: Tweet[],
  follows: Follow[],
  currentUserId: string,
): Tweet[] => {
  const authorIds = new Set([
    currentUserId,
    ...follows
      .filter((follow) => follow.followerId === currentUserId)
      .map((follow) => follow.followingId),
  ])

  return tweets
    .filter((tweet) => authorIds.has(tweet.authorId))
    .sort(
      (firstTweet, secondTweet) =>
        new Date(secondTweet.createdAt).getTime() -
        new Date(firstTweet.createdAt).getTime(),
    )
}