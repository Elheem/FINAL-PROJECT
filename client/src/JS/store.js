import { configureStore } from '@reduxjs/toolkit'
import commandeSlice from './commandeSlice'
import productslice from './productslice'

import userSlice from './userSlice/userSlice'

export const store = configureStore({
  reducer: {
    user:userSlice,
    product:productslice,
    commande :commandeSlice
  },
})