import { FC } from 'react'
import Layout from 'src/components/Layout'
import { getAllPostData } from 'src/lib/fetch'
import Post from 'src/components/Post'
import { GetStaticProps } from 'next'
import { POST } from 'src/types/Types'

interface STATICPROPS {
  posts: POST[]
}

const BlogPage = ({ posts }: STATICPROPS) => {
  return (
    <Layout title='Blog'>
      <p className='text-4xl mb-10'>blog page</p>
      <ul>{posts && posts.map((post) => <Post key={post.id} {...post} />)}</ul>
    </Layout>
  )
}
export default BlogPage

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPostData()
  return {
    props: { posts }
  }
}
