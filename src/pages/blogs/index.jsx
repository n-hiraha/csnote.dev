import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { getAllBlogs } from '@/features/blogs/api/getBlogs'
import { formatDate } from '@/lib/formatDate'

function Article({ blog }) {
  return (
    <article className='md:grid md:grid-cols-4 md:items-baseline'>
      <Card className='md:col-span-3'>
        <Card.Title href={`/blogs/${blog.slug}`}>{blog.title}</Card.Title>
        <Card.Eyebrow
          as='time'
          dateTime={blog.date}
          className='md:hidden'
          decorate
        >
          {formatDate(blog.date)}
        </Card.Eyebrow>
        <Card.Description>{blog.description}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
      <Card.Eyebrow
        as='time'
        dateTime={blog.date}
        className='mt-1 hidden md:block'
      >
        {formatDate(blog.date)}
      </Card.Eyebrow>
    </article>
  )
}

export default function blogsIndex({ blogs }) {
  return (
    <>
      <Head>
        <title>blogs</title>
        <meta name='description' content='' />
      </Head>
      <SimpleLayout title='記事一覧' intro=''>
        <div className='md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40'>
          <div className='flex max-w-3xl flex-col space-y-16'>
            {blogs.map((blog) => (
              <Article key={blogs.slug} blog={blog} />
            ))}
          </div>
        </div>
      </SimpleLayout>
    </>
  )
}

export async function getServerSideProps() {
  const blogs = (await getAllBlogs()) || []
  return {
    props: { blogs },
  }
}
