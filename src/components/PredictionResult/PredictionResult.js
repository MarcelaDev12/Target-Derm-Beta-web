import track from 'assets/track.svg'

import Alert from 'components/Alert/'
import ProgressBar from 'components/ProgressBar'

import styles from './PredictionResult.module.css'

function PredictionResult({ prediction, description }) {
  const precision = (prediction.probability * 100).toFixed(2)

  return prediction.probability > 0.6 ? (
    <article className={styles.predictions}>
      <h2 className={styles.heading}>
        {prediction.className.replace(/(_)/gi, ' ')}
      </h2>

      <h4 className={styles.subheading}>
        {prediction.className === 'ferida' ? (
          'Diagnóstico'
        ) : (
          <>
            <img src={track} alt="Visão geral" />
            
          </>
        )}
      </h4>

      <h5>Precisão desta inferência</h5>
      <ProgressBar min="0" max="100" value={precision}>
        {precision.replace('.', ',')} %
      </ProgressBar>

      <p className={styles.description}>
        {!description.error && !description.desc && <span>Buscando na internet informações úteis sobre a doença...</span>}
        {!description.error && description.desc && (
          <>
            {description.desc}
            <span>
              Veja mais em:{' '}
              <a href={description.wikiUrl}>{description.wikiUrl}</a>
            </span>
          </>
        )}
        {description.error && <span>Wikipedia not found.</span>}
      </p>
    </article>
  ) : (
    <Alert type="warning">
      Falha na predição, tente novamente com outra foto.
    </Alert>
  )
}

export default PredictionResult
