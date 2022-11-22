import { screen, render } from '@testing-library/react'

import Button from './Button'

describe('<Button />', () => {
  it('renders component with button role', () => {
    render(<Button>submit</Button>)
    expect(screen.getByRole('button')).toBeInTheDocument()
    expect(screen.getByRole('button')).toHaveClass('button')
  })

  it('renders as anchor tag', () => {
    render(
      <Button asLink href="/">
        submit
      </Button>
    )
    expect(screen.getByRole('link')).toBeInTheDocument()
    expect(screen.getByRole('link')).toHaveAttribute('href', '/')
    expect(screen.getByRole('link')).toHaveClass('button link')
  })
})
