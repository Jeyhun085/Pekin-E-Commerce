import { configureStore } from '@reduxjs/toolkit'
import group from './group.js'


export default configureStore({
  reducer: {
    group: group
  }
})