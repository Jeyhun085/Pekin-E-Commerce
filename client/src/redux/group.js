import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'group',
  initialState: {
    model: "c30",
    section: "engine"
  },
  reducers: {
    changeModel: (state, value) => {
      state.model = value.payload
    },
    changeSection: (state, value) => {
      state.section = value.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { changeModel,changeSection  } = counterSlice.actions

export default counterSlice.reducer