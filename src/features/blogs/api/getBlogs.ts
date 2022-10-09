import { GraphQLClient } from 'graphql-request'

import { getBlogBySlugQuery, getBlogsQuery } from './getBlogs.graphql'

const hygraph = new GraphQLClient(
  process.env.NEXT_PUBLIC_HYGRAPH_CONTENT_API_URL,
)

export async function getAllBlogs() {
  const data = await hygraph.request(getBlogsQuery)
  return data.blogs
}

export async function getBlogBySlug(slug: string | string[]) {
  const data = await hygraph.request(getBlogBySlugQuery, {
    stage: 'PUBLISHED',
    slug,
  })
  console.log(data.blog, 'data')
  return data.blog
}
