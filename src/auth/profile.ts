export interface ProfileDetails {
  fullname: string
  bio: string
}

export interface ProfileEdit extends ProfileDetails {
  photo?: File
  cover?: File
}

export interface SavedProfile extends ProfileDetails {
  photoURL?: string
  coverURL?: string
}

export const PROFILE_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/webp']
export const PROFILE_IMAGE_MAX_SIZE = 5 * 1024 * 1024

export const PROFILE_NAME_MIN_LENGTH = 2
export const PROFILE_NAME_MAX_LENGTH = 80
export const PROFILE_BIO_MAX_LENGTH = 160
