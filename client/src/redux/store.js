import { configureStore } from '@reduxjs/toolkit'
import group from './group'


export default configureStore({
  reducer: {
    group: group
  }
})