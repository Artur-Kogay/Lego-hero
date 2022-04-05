import React from 'react'
import styles from './Radio.module.scss'
import { Radio } from '@mui/material'
function RadioButton({ text, onchange, value }) {
  return (
    <div className={styles.container}>
      <Radio
        className={styles.radio}
        onChange={onchange}
        value={value}
        size="small"
        sx={{
          color: 'white',
          '&.Mui-checked span svg:last-of-type': {
            color: '#32EE72 !important',
          },
          '&.Mui-checked span svg:first-of-type': {
            color: 'white',
          },
        }}
      />
      <p className={styles.text}>{text}</p>
    </div>
  )
}

export default RadioButton
