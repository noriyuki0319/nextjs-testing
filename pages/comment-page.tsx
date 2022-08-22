import Layout from '../components/Layout'
import useSWR from 'swr'
import axios from 'axios'
import Comment from '../components/Comment'
import { COMMENT } from '../types/Types'

const CommentPage = () => {
  return (
    <Layout title='Comment'>
      <p className='text-4xl'>comment page</p>
    </Layout>
  )
}
export default CommentPage
