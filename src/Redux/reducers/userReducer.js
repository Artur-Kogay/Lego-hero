import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { $api } from '../../services/api'

export const getUser = createAsyncThunk('user/fetchUser', async () => {
  const { data } = await $api.get('/accounts/me/')
  return data
})

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: [],
    loading: false,
  },
  reducers: {
    setUser(state, action) {
      state.user = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.user = action.payload
      state.loading = true
    })
  },
})

export default userSlice.reducer
export const { setUser } = userSlice.actions
