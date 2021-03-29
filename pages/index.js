import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Box ,Text} from "@chakra-ui/react"
import Image from 'next/image'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
        <Text
  bgGradient="linear(to-l,#ff00cc,#333399)"
  bgClip="text"
  fontSize="6xl"
  fontWeight="extrabold"
>
 Welcome Enter
 with a happy  <Image src={'/2.svg'} height={50} width={100}/>Heart
</Text> 
        </h1>
        
        <Image src={'/1.svg'} height={650} width={500}/>
        

        

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Home Automation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://twitter-clone-3c380.web.app/" className={styles.card}>
            <h3>Twitter frontend &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://clone-7bb36.web.app/"
            className={styles.card}
          >
            <h3>Youtube Frontend &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://github.com/kunal838/"
            className={styles.card}
          >
            <h3>Github &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
      <Text
  bgGradient="linear(to-l, #7928CA,#FF0080)"
  bgClip="text"
  fontSize="1xl"
  fontWeight="extrabold"
>
 Open Source --> Kunal patel
</Text>

      </footer>
    </div>
  )
}
