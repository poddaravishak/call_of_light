import { Client, Databases, ID, Query } from 'node-appwrite'

const ENDPOINT = process.env.APPWRITE_ENDPOINT!
const PROJECT_ID = process.env.APPWRITE_PROJECT_ID!
const API_KEY = process.env.APPWRITE_API_KEY!

export const DB_ID = process.env.APPWRITE_DB_ID!

export const COL = {
  CONTACT_MESSAGES: 'contact_messages',
  AUTHOR_REQUESTS: 'author_requests',
  SITE_SETTINGS: 'site_settings',
  AUTHORS: 'authors',
  POSTS: 'posts',
  SUBSCRIBERS: 'subscribers',
} as const

export const SITE_SETTINGS_DOC_ID = 'main'

export function createClient() {
  const client = new Client()
    .setEndpoint(ENDPOINT)
    .setProject(PROJECT_ID)
    .setKey(API_KEY)
  return new Databases(client)
}

export { ID, Query }
