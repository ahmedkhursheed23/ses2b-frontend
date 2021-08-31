import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar';
import Link from 'next/link'
import Grid from '@material-ui/core/Grid';
import Logo from '../src/Images/Logo.png';


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ProctorUTS</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/ProctorUTS2.png" />
      </Head>
      <Navbar></Navbar>
      <div className={styles.header}>
      
        <main className={styles.main}>
           
          <div className={styles.logo} >
                <Image  src={Logo} alt="ProctorUTS Logo" />
              </div>
{/* 
              <p className={styles.description}>
                An Anti-Cheating Online Exam System with Privacy Protection 
              </p> */}
            <div className={styles.grid}>
              <Link href="/login" className={styles.card}>
                <div className={styles.card}>
                  <h2>Login &rarr;</h2>
                  <p>Login with your UTS Student or UTS Staff credentials</p>
                </div>
              </Link>

              <Link href="https://www.uts.edu.au/current-students/managing-your-course/classes-and-assessment/exams/online-exams"  className={styles.card}>
                
                <div className={styles.card}>
                  <h2>About &rarr;</h2>
                  <p>Find out information about online exams at UTS</p>
                </div>
              </Link>

              <Link
                href="/contact"
                className={styles.card}
              >
                <div className={styles.card}>
                  <h2>Contact &rarr;</h2>
                  <p>Contact ProctorUTS Admin team if you are experiencing any issues</p>
                </div>
              </Link>

              <Link
                href="/helpandfaq"
                className={styles.card}
              >
                <div className={styles.card}>
                  <h2>FAQ &rarr;</h2>
                  <p>
                  Get answers fast
                </p>
                </div>
              </Link>
            </div>
          </main>
      </div>
      <footer className={styles.footer}>
        <Link
          href="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Macaca_nigra_self-portrait_large.jpg/1200px-Macaca_nigra_self-portrait_large.jpg"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Lockdown
        </Link>
      </footer>
    </div>
  )
}