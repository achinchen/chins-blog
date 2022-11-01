import contentful from 'contentful'

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID || '',
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN  || ''
});

export async function getPosts() {
  const contentType = await client.getContentType('blogPost')
  console.log(contentType)
}