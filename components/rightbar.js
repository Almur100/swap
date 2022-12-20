import styles from "../styles/rightbar.module.css"
import Image from 'next/image'
// import Token from './token'
// import Tokenaddr from "./tokenaddr"
import { useState } from "react"

export default function Rightbar() {

    const [open, setopen] = useState(false);
    const [open1, setopen1] = useState(false);
    const [arrow, setarrow] = useState(false);
    const [arrow1, setarrow1] = useState(false);
    const [option, setoption] = useState("/ethereum.png");
    const [option1, setoption1] = useState("/dai.png");

    const [op1, setop1] = useState('ETH');
    const [op2, setop2] = useState('DAI');





    const tokenbar = () => {
        setopen(!open);
        setarrow(!arrow);
    };
    const tokenbar1 = () => {
        setopen1(!open1);
        setarrow1(!arrow1);
    };
    // const Serch = async () => {
    //     const search =
    //         Tokenaddr.filter(data => data.name.includes(op2)).map(item => item.address)
    //     return search;
    // }
    // console.log(Serch());


    // const call = Serch().then((val) => {
    //     const v = val[0];
    //     console.log(v);
    // });
    // async function connect() {
    //     if (typeof window.ethereum !== undefined) {
    //         try {
    //             await ethereum.request({ method: "eth_requestAccounts" });
    //             // const provider = new ethers.providers.Web3Provider(window.ethereum);
    //             const Provider = new ethers.providers.Web3Provider(window.ethereum);
    //             // setProvider(Provider);
    //             setSigner(Provider.getSigner());

    //         } catch (e) {
    //             console.log(e);
    //         }
    //     }

    // }













    return (
        <>
       
            <div className={styles.rightbar}>
                <div className={styles.rightbartop}>

                    <p>0✖f810...c69b21</p>


                    <div className={styles.btn} >CONNECT WALLET</div>


                </div>
                <div className={styles.rightbarmiddle}>
                    <Image src="/settings.png" width={20} height={20} alt='setting' className={styles.div1img} />
                    <div className={styles.div1}>
                        <p>Add Liquidity</p>

                    </div>
                    <p>Select pair</p>
                    <div className={styles.div2} >

                        <div className={styles.currency} onClick={tokenbar1}>
                            <Image src={option1} width={20} height={20} alt='token' />
                            <p>{op2}</p>
                            {arrow1 ?
                                <Image src="/arrow1.png" width={13} height={13} alt='arrow' /> :
                                <Image src="/arrow.png" width={13} height={13} alt='uparrow' />
                            }

                        </div>

                        <div className={styles.currency} onClick={tokenbar}>
                            <Image src={option} width={20} height={20} alt='currency' />
                            <p>{op1}</p>
                            {arrow ?
                                <Image src="/arrow1.png" width={13} height={13} alt='arow1' /> :
                                <Image src="/arrow.png" width={13} height={13} alt='arow2' />
                            }

                        </div>
                        {open && (



                            <div className={styles.token1} >
                                {Token.map((item) =>
                               
                                    
                                     
                                    <div key={item.id} onClick={() => {
                                        setop1(item.name);
                                        setopen(false);

                                    }}>


                                        <div className={styles.tokendiv} onClick={() => setoption(item.Image
                                        )



                                        }>
                                            <div> <Image src={item.Image} width={20} height={20} alt='currimg' className={styles.img} /></div>

                                            <div >{item.name} </div >
                                        </div>
                                    </div>
                                   


                               
                                
                                )}
                               



                            </div>

                        )}



                    </div>
                    {open1 && (
                        <div className={styles.token}>
                            {Token.map((item) =>

                                <div key={item.id} onClick={() => {
                                    setop2(item.name);
                                    setopen1(false);
                                }}>
                                    <div className={styles.tokendiv} onClick={() => setoption1(item.Image)}>
                                        <div> <Image src={item.Image} width={20} height={20} alt='over' className={styles.img} /></div>

                                        <div>{item.name} </div >
                                    </div>
                                </div>
                            )}

                        </div>
                    )}




                    <div className={styles.fees}>
                        <p>0.3% fee tier</p>
                        <p>82% select</p>
                    </div>
                    <p>Deposit Amounts</p>
                    <div className={styles.deposit}>
                        <input type='number' placeholder='amount' />
                        <div className={styles.depositleft}>
                            <Image src="/dai.png" width={20} height={20} alt='over'/>
                            <p>{op2}</p>

                        </div>
                    </div>
                    <div className={styles.deposit}>
                        <input type='number' placeholder='amount' />
                        <div className={styles.depositleft}>
                            <Image src="/ethereum.png" width={20} height={20} alt='over' />
                            <p>{op1}</p>

                        </div>
                    </div>
                    <div className={styles.button} >
                        <p>Confirm</p>
                    </div>
                </div>
                <div className={styles.rightbarbottom}>
                    <p>Top Pools</p>
                    <p>Explore popular pools on<br /> coinze analytics</p>

                </div>
            </div>
        </>


    )
}
const Token = [

    {
        id: 1,
        name: 'ETH',
        Image: '/ethereum.png'

    },
    {
        id: 2,
        name: 'BNB',
        Image: '/dai.png'

    },
    {
        id: 3,
        name: 'USDT',
        Image: '/dai.png'

    },
    {
        id: 4,
        name: 'USDC',
        Image: '/ethereum.png'

    },
    {
        id: 5,
        name: 'DAI',
        Image: '/dai.png'

    },
]
const Tokenaddr =[
    {name:'ETH',
    address:'0xbea2a3b035e1994c9d447a28fd6e98b77b407be8'
             

},
    {name:'BNB',
    address:'0xbea2a3b035e1994c9d447a28fd6e98b77b407be8'
},
    {name:'USDT',
    address:'0xbea2a3b035e1994c9d447a28fd6e98b77b407be8'
},
    {name:'USDC',
    address:'0xbea2a3b035e1994c9d447a28fd6e98b77b407be8'
   
},
    {name:'DAI',
    address:'0xbea2a3b035e1994c9d447a28fd6e98b77b407be8'
   

}
]
