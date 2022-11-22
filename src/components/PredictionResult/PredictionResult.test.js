import { screen, render } from '@testing-library/react'

import PredictionResult from './PredictionResult'

describe('<PredictionResult />', () => {
  it('renders component', () => {
    const wikiUrl = 'https://pt.wikipedia.org/wiki/Psoríase'
    const desc =
      'Psoríase é uma doença autoimune de longa duração caracterizada por manchas na pele. Estas manchas são geralmente avermelhadas, pruriginosas e escamosas. A gravidade é variável, desde manchas pequenas e localizadas até ao revestimento total do corpo.'
    render(
      <PredictionResult
        prediction={{ probability: 0.8, className: 'Psoríase' }}
        description={{
          desc,
          wikiUrl,
        }}
      />
    )

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Psoríase'
    )
    expect(screen.getByText(/80,00/im)).toBeInTheDocument()
    expect(screen.getByRole('link')).toHaveAttribute('href', wikiUrl)
    expect(screen.getByText(desc)).toBeInTheDocument()
  })

  describe('when wikipedia is not found', () => {
    it('show message', () => {
      render(
        <PredictionResult
          prediction={{ probability: 0.8, className: 'Psoríase' }}
          description={{
            error: 'Não consegui encontrar a descrição',
          }}
        />
      )

      expect(screen.getByText('Wikipedia not found.')).toBeInTheDocument()
    })
  })

  describe('when probability is low', () => {
    it('show alert warning', () => {
      render(
        <PredictionResult
          prediction={{ probability: 0.5, className: 'Psoríase' }}
          description={{
            desc: 'Psoríase é uma doença autoimune de longa duração caracterizada por manchas na pele. Estas manchas são geralmente avermelhadas, pruriginosas e escamosas. A gravidade é variável, desde manchas pequenas e localizadas até ao revestimento total do corpo.',
            wikiUrl:'https://pt.wikipedia.org/wiki/Psoríase',
          }}
        />
      )

      expect(screen.getByRole('alert')).toBeInTheDocument()
      expect(screen.getByRole('alert')).toHaveTextContent(
        'Falha na predição, tente novamente com outra foto..'
      )
    })
  })
})
