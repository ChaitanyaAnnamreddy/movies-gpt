import { createSlice } from '@reduxjs/toolkit'

const languageSlice = createSlice({
  name: 'language',
  initialState: {
    selectedLang: 'en',
  },
  reducers: {
    setLanguage: (state, action) => {
      state.selectedLang = action.payload
    },
  },
})

export const { setLanguage } = languageSlice.actions
export default languageSlice.reducer
