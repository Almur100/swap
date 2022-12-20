import styles from '../styles/index.module.css'
import Leftbar from '../components/leftbar'
import Middlebar from '../components/middlebar'
import Rightbar from '../components/rightbar'

export default function Home() {
  return (
    <>
    <div className={styles.main}>
      <Leftbar/>
      <Middlebar/>
      <Rightbar/>

    </div>
    </>
    
    
  )
}
