import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import {useHistory} from "react-router-dom"

const RouteGuard = ({ component: Component, ...rest }) => {
  const router = useHistory()
  function hasJWT() {
    let flag;

    //check user has JWT token
    localStorage.getItem('access') ? (flag = true) : (flag = false)
    console.log(flag);
    return flag
  }


  return (
    <Route
      {...rest}
      render={(props) =>
        hasJWT() ? (
          <Component {...props} />
        ) : (
          // <Redirect to={{ pathname: `/login` }} />
          router.push('/login')
        )
      }
    />
  )
}

export default RouteGuard
