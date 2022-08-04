import { configureStore } from '@reduxjs/toolkit'

import userManagement from '../features/usersManagement/userManagement'

export default configureStore({
  reducer: {
    users: userManagement
  },
})