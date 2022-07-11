import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'group',
  initialState: {
    model: "",
    section: "",
    isSelected: false
  },
  reducers: {
    changeModel: (state, value) => {
      state.model = value.payload
    },
    changeSection: (state, value) => {
      state.section = value.payload
    },
    changeIsSelected: (state) => {
      state.isSelected = true
    }
  }
})

// Action creators are generated for each case reducer function
export const { changeModel,changeSection, changeIsSelected  } = counterSlice.actions

export default counterSlice.reducer