import React, { useEffect } from 'react'
import { Redirect, useHistory, useLocation, useParams } from 'react-router-dom'
import { $api } from '../../services/api'

const activate = async (router) => {
  const x = new URLSearchParams(window.location.search)
  try {
    let obj = {}
    for (const [key, value] of x.entries()) {
      obj[key] = value
    }
    await $api.post('/accounts/auth/users/activation/', obj)
    router.push('/welcome')
  } catch (e) {
    console.log(e.response)
  }
}

const Activate = () => {
  const router = useHistory()

  useEffect(() => {
    activate(router)
  }, [])
  return <></>
}

export default Activate
