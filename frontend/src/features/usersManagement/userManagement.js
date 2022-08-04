import { createSlice } from '@reduxjs/toolkit'

export const userManagement = createSlice({
    name: 'users',
    initialState: {
        value: 0
    },
    reducers: {
        //Future actions with users and state
    }
})

export const {} = userManagement.actions

export default userManagement.reducer