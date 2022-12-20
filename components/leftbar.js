import styles from "../styles/leftbar.module.css"
import Image from "next/image"
import { useState } from "react"

export default function Leftbar() {
    const[active,setactive] = useState(false);
    
    
    return (
         <>
        <div className={styles.leftbar}>
            <div className={styles.leftbarhead}>
                <Image src="/logo.jpg" width={20} height={20} alt='logo'></Image>
                <p>COINIZE</p>

            </div>
            <div className={styles.leftbartop}>
<a href="#over" > <Image src="/overfiew.png" width={20} height={20} alt='over' className={styles.Bmage}/><p className={ `${active==='#over'?  'styles.active':''}` } onClick={()=>setactive('#over')}> Overview</p> </a>                
                <a href="#trade"> <Image src="/trade.png" width={20} height={20} alt='over' className={styles.Bmage}/><p className={ `${active==='#trade'?  'styles.active':''}`  } onClick={()=>setactive('#trade')}>Trade</p> </a>
                <a href="#swap"> <Image src="/trade.png" width={20} height={20} alt='over' className={styles.Bmage}/><p className={ {color:active==='#swap'?  '#91a7ef':''} } onClick={()=>setactive('#swap')}>Swap</p> </a>
                <a href="#pools"> <Image src="/pool.png" width={20} height={20} alt='over' className={styles.Bmage}/><p className={ {color:active==='#pools'?  '#91a7ef':''} } onClick={()=>setactive('#pools')}>Pools</p> </a>
              
                
                <a href="#analytics"> <Image src="/analytics.png" width={20} height={20} alt='over' className={styles.Bmage}/><p className={ {color:active==='#analytics'?  '#91a7ef':''} } onClick={()=>setactive('#analytics')}>Analytics</p></a>
                <a href="#community"> <Image src="/community.png" width={20} height={20} alt='over' className={styles.Bmage}/><p className={ {color:active==='#community'?  '#91a7ef':''} } onClick={()=>setactive('#community')}>Community</p></a>

            </div>
            <div className={styles.leftbarmiddle}>
                <a href="#support"> <Image src="/support.png" width={20} height={20} alt='over' className={styles.Bmage}/><p className={ {color:active==='#support'?  '#91a7ef':''} } onClick={()=>setactive('#support')}>Support</p> </a>
                <a href="#settings"> <Image src="/settings.png" width={20} height={20} alt='over' className={styles.Bmage}/><p className={ {color:active==='#settings'?  '#91a7ef':''} } onClick={()=>setactive('#settings')}>Settings</p></a>

            </div>
            <div className={styles.leftbarbottom}>
                <a href="#logout"> <Image src="/logout.png" width={20} height={20} alt='over' className={styles.Bmage}/><p className={ {color:active==='#logout'?  '#91a7ef':''} } onClick={()=>setactive('#logout')}>Logout</p></a>

            </div>

        </div>
        </>
      
      
    )
  }
  