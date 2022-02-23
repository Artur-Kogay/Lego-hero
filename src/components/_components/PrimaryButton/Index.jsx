import React from 'react'
import Button from '@mui/material/Button';
import './PrimaryButton.module.css'
import './PrimaryButton.module.css'

const style = {
  background: "linear-gradient(267.53deg, #359ad2 -0.27%, #982eeb 100%)",
  borderRadius: "5px",
  fontFamily: 'Gilory',
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "12px",
  lineHeight: "15px",
  display: "flex",
  alignItems: "center",
  textAlign: "center",
  color: "#ffffff",
  minWidth: "223px",
  minHeight: "46px"
}

function PrimaryButton({children}, {...props}) {
  return (
    <Button {...props} variant="text" style={style}>{children}</Button>
  )
}

export default PrimaryButton