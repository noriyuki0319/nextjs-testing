import { COMMENT } from '../types/Types'

const Comment = ({ id, name, body }: COMMENT) => {
  return (
    <li className='mx-10'>
      <p className=''>
        {id}
        {' : '}
        {body}
      </p>
      <p className='text-center ml-3 mb-10'>
        {'by '}
        {name}
      </p>
    </li>
  )
}

export default Comment
