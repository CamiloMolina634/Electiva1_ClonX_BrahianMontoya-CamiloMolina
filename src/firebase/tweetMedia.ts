import { deleteObject, getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage'
import { FirebaseApp } from './config'

export const TWEET_MEDIA_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/gif']
export const MAX_TWEET_MEDIA_BYTES = 5 * 1024 * 1024

export const validateTweetMedia = (file: File): string => {
  if (!TWEET_MEDIA_TYPES.includes(file.type)) return 'Selecciona una imagen JPG, PNG, WebP o GIF.'
  if (file.size === 0 || file.size > MAX_TWEET_MEDIA_BYTES) return 'El archivo debe pesar entre 1 byte y 5 MB.'
  return ''
}

const mediaRef = (authorId: string, tweetId: string) =>
  ref(getStorage(FirebaseApp), 'tweet-media/' + authorId + '/' + tweetId)

export const uploadTweetMedia = async (authorId: string, tweetId: string, file: File): Promise<string> => {
  const error = validateTweetMedia(file)
  if (error) throw new Error(error)

  const attachment = mediaRef(authorId, tweetId)
  await uploadBytes(attachment, file, { contentType: file.type })
  try {
    return await getDownloadURL(attachment)
  } catch (error) {
    await deleteObject(attachment).catch(() => undefined)
    throw error
  }
}

export const removeTweetMedia = (authorId: string, tweetId: string) =>
  deleteObject(mediaRef(authorId, tweetId))
