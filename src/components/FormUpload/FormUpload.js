import React from 'react'
import { useDropzone } from 'react-dropzone'

import uploadSVG from 'assets/uploadImage.svg'
import closeSVG from 'assets/close.svg'

import DropContainer from 'components/DropContainer'
import PredictionResult from 'components/PredictionResult/PredictionResult'
import Loading from 'components/Loading'
import Preview from 'components/Preview'
import Button from 'components/Button'
import Alert from 'components/Alert'

import styles from './FormUpload.module.css'

import { useFormUpload } from './useFormUpload'

function FormUpload() {
  const { file, prediction, description, error, isLoading, onDrop } =
    useFormUpload()

  const { getRootProps, getInputProps, isDragActive, isDragReject } =
    useDropzone({ onDrop, accept: 'image/jpeg, image/png, image/jpg' })

  return (
    <>
      {file.name ? (
        <div className={styles.container}>
          <section className={styles.wrapper}>
            <div className={styles.buttonGroup}>
              <Button {...getRootProps()} shine>
                Analisar outra imagem
              </Button>
              <input {...getInputProps()} />
            </div>

            <Preview file={file} />

            {isLoading && <Loading />}

            {error && (
              <Alert type="danger">
                Falha ao escanear a imagem, tente novamente de outro ângulo.
              </Alert>
            )}
          </section>

          {prediction.probability && (
            <PredictionResult
              prediction={prediction}
              description={description}
            />
          )}
        </div>
      ) : (
        <div className={styles.uploadContainer} {...getRootProps()}>
          <input {...getInputProps()} data-testid="upload-image" />
          <h2>Escolha uma foto</h2>

          {isDragReject && (
            <DropContainer
              reject
              header="Suporto apenas fotos em PNG ou JPG!"
              Image={() => <img src={closeSVG} alt="Close" />}
            />
          )}
          {isDragActive ? (
            <DropContainer
              active
              header="Drop here"
              subheader="to send your photo"
              Image={() => <img src={uploadSVG} alt="Illustration upload" />}
            />
          ) : (
            <DropContainer
              header="Arraste e solte ou clique aqui"
              subheader="para enviar sua foto"
              Image={() => <img src={uploadSVG} alt="Illustration upload" />}
            >
              <p>Nenhuma foto selecionada.</p>
            </DropContainer>
          )}
        </div>
      )}
    </>
  )
}

export default FormUpload
