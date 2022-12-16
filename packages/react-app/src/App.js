import React from "react"
import { useEthers } from "@usedapp/core";

import { usePools } from './hooks'
import styles from './styles'
import {phoenixLogo} from './assets'
import { Exchange, Loader, WalletButton } from "./components";

const App = () => {
  const { account } = useEthers();
  const [loading, pools] = usePools()

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <header className={styles.header}>
          <img
            src={phoenixLogo}
            alt="phoenix logo"
            className="w-16 h-16 object-contain"
          />
          <WalletButton className="wallet_button"/>
        </header>
        <div className={styles.exchangeContainer}>
          <h1 className={styles.headTitle}>PhoenixSwap</h1>
          <p className={styles.subTitle}>Exchange tokens in seconds</p>
          <div className={styles.exchangeBoxWrapper}>
            <div className={styles.exchangeBox}>
              <div className="red_gradient" />
              <div className={styles.exchange}>
                {
                  account ? (
                    loading ? (
                      <Loader title="Loading pools, please wait..."/>
                    ) : <Exchange pools={pools}/>
                  ) : <Loader title="Please connect your wallet"/>    
                }
              </div>
              <div className="yellow_gradient" />
            </div>
          </div>
        </div>

      </div>
    </div>  
  )
}

export default App;