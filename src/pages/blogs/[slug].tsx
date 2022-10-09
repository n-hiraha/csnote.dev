import { GetServerSidePropsContext } from 'next'

import { ArticleLayout } from '@/components/ArticleLayout'
import { getBlogBySlug } from '@/features/blogs/api/getBlogs'

const BlogPage = (props) => {
  const { blog } = props
  return (
    <ArticleLayout
      meta={{
        title: blog.title,
        description: blog.seo.description,
        date: blog.date,
      }}
      {...blog}
    />
  )
}
export default BlogPage

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const slug = ctx.query.slug || ''
  // slugがない場合
  if (!slug) {
    return {
      redirect: {
        permanent: false,
        destination: `/blogs`,
      },
    }
  }

  const data = (await getBlogBySlug(slug)) || ''
  if (!data) {
    console.error(`[Graphql Error] Message:getBlogBySlugError`)
  }

  return {
    props: { blog: data },
  }
}
