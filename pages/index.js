import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'


export default function Home() {
  return (
    <>
    <Head>
      <title>Ninja List | Home</title>
      <meta name='keywords'content='ninjas'/>
    </Head>
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Fugiat deserunt enim laborum ut velit consequat velit magna eiusmod amet. Nisi aliquip culpa proident et. Eiusmod eiusmod consectetur nisi consectetur est sit. Minim ex reprehenderit labore cupidatat nostrud pariatur. Et tempor aute elit commodo irure amet consectetur nulla ea.</p>
      <p className={styles.text}>Tempor do esse amet qui consequat elit officia quis veniam proident incididunt. Minim sint excepteur laborum tempor dolore officia sint irure tempor voluptate aliqua veniam. Occaecat officia pariatur quis nostrud culpa anim velit velit. Elit voluptate ex consectetur non commodo ullamco ipsum est laborum sit proident veniam ipsum laborum. Sit nostrud voluptate eu non aliqua nostrud fugiat sunt incididunt nisi proident do. Eiusmod ad consequat id est ad.</p>
      <Link className={styles.btn} href="/ninjas">See Ninja Listing</Link>
    </div>
    </>
  )
}
