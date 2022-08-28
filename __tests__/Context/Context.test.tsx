import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { StateProvider } from 'src/context/StateProvider'
import ContextA from 'src/components/ContextA'
import ContextB from 'src/components/ContextB'

describe('Global state management (useContext)', () => {
  it('Should change the toggle state globally', () => {
    render(
      <StateProvider>
        <ContextA />
        <ContextB />
      </StateProvider>
    )
    expect(screen.getByTestId('toggle-a').textContent).toBe('false')
    expect(screen.getByTestId('toggle-b').textContent).toBe('false')
    userEvent.click(screen.getByRole('button'))
    expect(screen.getByTestId('toggle-a').textContent).toBe('true')
    expect(screen.getByTestId('toggle-b').textContent).toBe('true')
  })
})
