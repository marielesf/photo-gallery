import Head from 'next/head';
import styles from '../styles/Home.module.css';
import PhotoBox from './photoBox';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Photo Gallery</title>
      </Head>

      <main>
        <h1>Photo Gallery</h1>
        <div className={styles.gridWapper}>
          <PhotoBox></PhotoBox>
        </div>
      </main>
    </div>
  );
}
