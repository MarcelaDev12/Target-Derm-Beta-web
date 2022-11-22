import { screen, render } from '@testing-library/react'

import Preview from './Preview'

describe('<Preview />', () => {
  it('renders component with file', () => {
    const file = new File(['Psoríase'], '../downloads/p.jpg', {
      type: 'image/jpg',
    })
    render(<Preview file={file} />)
    expect(screen.getByText(/p.jpg/i)).toBeInTheDocument()
  })
})
