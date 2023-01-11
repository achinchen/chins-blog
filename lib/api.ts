type FetchPostResponse = {
  data?: {
    blogPostCollection?: {
      items: any[]
    }
  }
}

type FetchAuthorResponse = {
  data?: {
    authorCollection?: {
      items: any[]
    }
  }
}

const POST_GRAPHQL_FIELDS = `
slug
title
coverImage {
  url
}
date
excerpt
content
`


const AUTHOR_GRAPHQL= `
name
picture {
  url
}
`


async function fetchGraphQL(query: string) {
  const response = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ query }),
    }
  )
  const result = await response.json()
  return result
}

function extractPost(fetchResponse: FetchPostResponse) {
  return fetchResponse?.data?.blogPostCollection?.items?.[0]
}

function extractPostEntries(fetchResponse: FetchPostResponse) {
  return fetchResponse?.data?.blogPostCollection?.items
}


function extractAuthorEntries(fetchResponse: FetchAuthorResponse) {
  return fetchResponse?.data?.authorCollection?.items[0]
}


export async function getAuthor() {
  const entries = await fetchGraphQL(
    `query {
      authorCollection(limit: 1) {
        items {
          ${AUTHOR_GRAPHQL}
        }
      }
    }`
  )
  return extractAuthorEntries(entries)
}
export async function getAllPostsWithSlug() {
  const entries = await fetchGraphQL(
    `query {
      blogPostCollection(where: { slug_exists: true }, order: date_DESC, limit: 10) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`
  )
  return extractPostEntries(entries)
}

export async function getAllPosts() {
  const entries = await fetchGraphQL(
    `query {
      blogPostCollection(order: date_DESC, limit: 10) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`
  )
  return extractPostEntries(entries)
}

export async function getPostAndMorePosts(slug: string) {
  const entry = await fetchGraphQL(
    `query {
      blogPostCollection(where: { slug: "${slug}" }, limit: 1) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`
  )
  const entries = await fetchGraphQL(
    `query {
      blogPostCollection(where: { slug_not_in: "${slug}" }, order: date_DESC, limit: 2) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`
  )
  return {
    post: extractPost(entry),
    morePosts: extractPostEntries(entries),
  }
}