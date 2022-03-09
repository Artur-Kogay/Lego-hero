import React from 'react'
import Button from '@mui/material/Button'

const style = {
  background: 'transparent',
  borderRadius: '5px',
  fontFamily: "'Gilroy-Medium', sans-serif",
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '12px',
  lineHeight: '15px',
  display: 'flex',
  alignItems: 'center',
  textAlign: 'center',
  color: '#ffffff',
  minWidth: '185px',
  minHeight: '46px',
  border: '1px solid #fff',
}

function SecondaryButton({ children }, { ...props }) {
  return (
    <Button {...props} variant="text" style={style}>
      {children}
    </Button>
  )
}

export default SecondaryButton
