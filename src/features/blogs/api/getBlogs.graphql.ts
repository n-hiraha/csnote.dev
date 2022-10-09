import gql from 'graphql-tag'

export const getBlogsQuery = gql`
  {
    blogs {
      title
      slug
      date
      content
      tags
      stage
      updatedAt
      author {
        name
        id
      }
      seo {
        title
        description
      }
    }
  }
`

export const getBlogBySlugQuery = gql`
  query getBlogBySlug($slug: String!, $stage: Stage!) {
    blog(where: { slug: $slug }, stage: $stage) {
      title
      slug
      date
      content
      tags
      stage
      updatedAt
      author {
        name
        id
      }
      seo {
        title
        description
      }
    }
  }
`
