import styles from "../styles/middlebar.module.css"
import Image from "next/image"
import { useState } from "react"

export default function Middlebar() {
    const [open, setopen] = useState(false);
    const mobbar = () => {
        setopen(true);
        
    };
    const mobbar1 = () => {
        setopen(false);
        
    };

    return (
        <>
        {open&&(
         <div className={styles.mobmenu}>
        <Image src="/multiply.png" width={27} height={27} alt='arrow' onClick={mobbar1}  />
            <p>Overview</p>
            <p>Trade</p>
            <p>Swap</p>
            <p>Pools</p>
            <p>Analytics</p>
            <p>Community</p>
            <p>Support</p>
            <p>Settings</p>
            <p>Logout</p>

        </div>
        )}
        <div className={styles.middlebar}>
            <div className={styles.middlebartop}>
                <input type='text' placeholder='Search pools or tokens' />
                <Image src="/search.png" width={20} height={20} alt='over'/>

            </div>
            <div className={styles.middlebartopmob}>
               <div className={styles.btn}>CONNECT WALLET</div>
               <div onClick={mobbar}>
                <Image src="/menuicon.png" width={30} height={30} alt='over'/>
                </div>

            </div>
            <div className={styles.barmiddle}>
                <p>Earn yield on trading<br/> fees by providing<br/> liquidity</p>

            </div>
            <div className={styles.pools}>
                <div className={styles.poolleft}>
                    <p>pools</p>
                    <p>Just stake some tokens to earn</p>

                </div>
                <div className={styles.poolright}>
                    <p>All pools</p>
                    <Image src="/arrow.png" width={10} height={10} alt='over'/>
                </div>

            </div>
            <div className={styles.middlebarbottom}>
                <div className={styles.div1}>
                <div className={styles.div1left}> 
                    <p>#</p>
                    <p>pool</p>

                </div>
                <div className={styles.div1right}>
                    <p>TVL</p>
                    <p>Volume 24H</p>
                    <p>Volume 7D</p>

                </div>
                </div>
                <div className={styles.div1}>
                    <div className={styles.div1left}>
                        <p>1</p>
                        <div>
                        <Image src="/ethereum.png" width={20} height={20} alt='over' className={styles.tokenimg}/>
                        <Image src="/dai.png" width={20} height={20} alt='over'/>
                        </div>
                        <p>USDT/ETH</p>
                    </div>
                    <div className={styles.div1right}>
                        <p>$ 397.04M</p>
                        <p>$ 397.04M</p>
                        <p>$ 397.04M</p>

                    </div>
                </div>
                <div className={styles.div1}>
                    <div className={styles.div1left}>
                        <p>2</p>
                        <div>
                        <Image src="/ethereum.png" width={20} height={20} alt='over' className={styles.tokenimg}/>
                        <Image src="/dai.png" width={20} height={20} alt='over'/>
                        </div>
                        <p>DAI/ETH</p>
                    </div>
                    <div className={styles.div1right}>
                        <p>$ 897.04M</p>
                        <p>$ 343.04M</p>
                        <p>$ 997.04M</p>

                    </div>
                </div>
                <div className={styles.div1}>
                    <div className={styles.div1left}>
                        <p>3</p>
                        <div>
                        <Image src="/ethereum.png" width={20} height={20} alt='over' className={styles.tokenimg}/>
                        <Image src="/dai.png" width={20} height={20} alt='over'/>
                        </div>
                        <p>USDT/USDC</p>
                    </div>
                    <div className={styles.div1right}>
                        <p>$ 197.04M</p>
                        <p>$ 497.04M</p>
                        <p>$ 897.04M</p>

                    </div>
                </div>
                <div className={styles.div1}>
                    <div className={styles.div1left}>
                        <p>4</p>
                        <div>
                        <Image src="/ethereum.png" width={20} height={20} alt='over' className={styles.tokenimg}/>
                        <Image src="/dai.png" width={20} height={20} alt='over'/>
                        </div>
                        <p>USDT/DAI</p>
                    </div>
                    <div className={styles.div1right}>
                        <p>$ 797.04M</p>
                        <p>$ 367.04M</p>
                        <p>$ 197.04M</p>

                    </div>
                </div>
                <div className={styles.div1}>
                    <div className={styles.div1left}>
                        <p>5</p>
                        <div>
                        <Image src="/ethereum.png" width={20} height={20} alt='over' className={styles.tokenimg}/>
                        <Image src="/dai.png" width={20} height={20} alt='over'/>
                        </div>
                        <p>USDT/BNB</p>
                    </div>
                    <div className={styles.div1right}>
                        <p>$ 597.04M</p>
                        <p>$ 307.04M</p>
                        <p>$ 697.04M</p>

                    </div>
                </div>
            </div>

        </div>
        </>
      
      
    )
  }
  