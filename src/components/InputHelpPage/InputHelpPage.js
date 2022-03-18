import { InputAdornment, TextField } from '@mui/material'
import React from 'react'
import style from './InputHelpPage.module.scss'

function InputHelpPage({ display = 'block', title, Icon = null, text, changeFunc, value, name }) {
  return (
    <div
      style={!display ? { display: 'none' } : { display: 'inherit' }}
      className={style.container}
    >
      <p className={style.title}>{title}</p>
      <TextField
        id="outlined-start-adornment"
        name={name}
        value={value}
        className={style.input}
        onChange={changeFunc}
        placeholder={text}
        multiline
        inputProps={{ style: { color: 'white' } }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              {Icon != null ? <Icon /> : ''}
            </InputAdornment>
          ),
        }}
      />
    </div>
  )
}

export default InputHelpPage
