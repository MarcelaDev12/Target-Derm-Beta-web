import Button from 'components/Button'
import Logo from 'components/Logo'

import dogScanImg from 'assets/dog-scan.png'

import styles from './Home.module.css'

function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.heroContainer}>
        <Logo className={styles.heroLogo} />
        <section className={styles.hero}>
          <h1>Mira certeira no diagnóstico de doenças da pele.</h1>
          <p>
            Triagem diagnóstica mediada por inteligência artificial capaz de predizer Psoríase e outras lesões dermatológicas com altíssima precisão.
          </p>
          <Button href="/dash" asLink rounded>
            Teste aqui
          </Button>
        </section>
      </main>
      <aside>
        <figure>
          <img src={dogScanImg} alt="dog" />
        </figure>
      </aside>
    </div>
  )
}

export default Home
