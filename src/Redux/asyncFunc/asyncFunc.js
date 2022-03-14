import { $api } from '../../services/api'
import { setUser } from '../reducers/userReducer'

export const getUser = () => {
  return async (dispatch) => {
    const { data } = await $api.get(`/accounts/me/`)
    dispatch(setUser(data))
  }
}
