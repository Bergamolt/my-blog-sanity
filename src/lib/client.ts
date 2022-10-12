import sanityClient from '@sanity/client'
import imageImportBuilder from '@sanity/image-url'

export const clientConfig = {
  projectId: 'm8wyizzj',
  dataset: 'production',
}

export const client = sanityClient({
  ...clientConfig,
  apiVersion: '2021-03-25',
  token: process.env.SANITY_TOKEN,
  useCdn: true,
})

export const builder = imageImportBuilder(client)

export const urlFor = (source: string) => builder.image(source)
