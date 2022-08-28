import { useStateContext } from 'src/context/StateProvider'

const ContextA = () => {
  const { toggle, setToggle } = useStateContext()

  return (
    <>
      <button
        className='bg-green-500 hover:bg-green-400 px-3 py-2 mb-5 text-white rounded focus:outline-none'
        onClick={() => {
          setToggle(!toggle)
        }}
      >
        change
      </button>
      <p>Context A</p>
      <p className='mb-5 text-indigo-500' data-testid='toggle-a'>
        {toggle ? 'true' : 'false'}
      </p>
    </>
  )
}

export default ContextA
