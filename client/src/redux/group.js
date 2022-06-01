import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'group',
  initialState: {
    model: "baic",
    section: "chassis"
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