import { useStateContext } from 'src/context/StateProvider'

const ContextB = () => {
  const { toggle } = useStateContext()

  return (
    <>
      <p>Context B</p>
      <p className='text-indigo-600' data-testid='toggle-b'>
        {toggle ? 'true' : 'false'}
      </p>
    </>
  )
}

export default ContextB
