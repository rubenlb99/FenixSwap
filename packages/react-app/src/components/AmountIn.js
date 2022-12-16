import React, { useEffect, useState, useRef } from 'react'

import { chevronDown } from '../assets'
import styles from '../styles'
import { useOnClickOutside } from '../utils'

const AmountIn = () => {
  return (
    <div className={styles.amountContainer}>
        <input 
            placeholder="0.0"
            type="number"
            value=""
            disabled={false}
            onChange={() => {}}
            className={styles.amountInput}
        />

        <div className='relative' onClick={() => {}}>
            <button className={styles.currencyButton}>
                {"ETH"}
                <img 
                    src={chevronDown}
                    alt="chevron down"
                    className={`w-4 h-4 object-contain ml-2 ${true ? 'rotate-180' : 'rotate-0'}`}
                />
            </button>
        </div>

    </div>
  )
}

export default AmountIn