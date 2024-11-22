import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store/store'

interface PoemState {
  value: string
}

const initialState: PoemState = {
  value: '',
}

export const poemSlice = createSlice({
  name: 'poem',
  initialState,
  reducers: {
    
    setValue: (state, action: PayloadAction<string>) => {
      state.value += action.payload
    },
  },
})

export const { setValue} = poemSlice.actions

export default poemSlice.reducer