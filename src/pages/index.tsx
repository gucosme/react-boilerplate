import { useState } from 'react'
import Head from 'next/head'
import Button from '@/components/Button/Button'

import styles from '../styles/Home.module.css'

export default function Home(): JSX.Element {
  const [count, setCount] = useState(0)

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>{count}</div>
      <Button onClick={() => setCount(count + 1)}>CLick me</Button>
    </div>
  )
}
